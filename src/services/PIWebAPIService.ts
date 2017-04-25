// Import injectable for dependency injection
import { injectable } from "inversify";
import "reflect-metadata";
// Import classes and API's from piwebapi client
// Modified HttpBasicAuth with requestOptions.strictSSL = false to ignore bad certificates
// Modified all "protected authentications" to "protected authentications: any" for typescript compiling
// Modified all Date types to string because in runtime the PiWebAPI will return ISO strings not matching the date type.
import {
    AssetDatabaseApi, Element as AfElement, ElementApi, EventFrame,
    EventFrameApi, ItemsEventFrame, PointApi, StreamApi, TimedValue,
} from "../apiclients/piwebapi";
// Import PiWebAPI config
import { config } from "../configs/piwebapi_config";
// Import interfaces
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

@injectable()
export class PIWebAPIService implements IPIWebAPIService {

    private user: string;
    private password: string;
    private basePath: string;

    private pointAPI: PointApi;
    private streamAPI: StreamApi;
    private elementAPI: ElementApi;
    private eventFrameAPI: EventFrameApi;
    private assetDatabaseAPI: AssetDatabaseApi;

    constructor() {
        this.setBasePath(config.basePath);
        this.setBasicAuth(config.username, config.password);
        this.initAPI();
    }

    // Set credentials
    public setBasicAuth(user: string, password: string) {
        this.user = user;
        this.password = password;
    }

    // Override base path piwebapi
    public setBasePath(basePath: string) {
        this.basePath = basePath;
    }

    // Get actual value from PI point path
    public async getPIPointDataByPath(fullPath: string, time: string = "*"): Promise<TimedValue> {
        const pointResponse = await this.pointAPI.pointGetByPath(fullPath);
        const valueResponse = await this.streamAPI.streamGetValue(pointResponse.body.WebId,undefined,undefined,time,undefined);
        return valueResponse.body;
    }

    // Get element from AF path
    public async getElementByPath(fullPath: string): Promise<AfElement> {
        const elementResponse = await this.elementAPI.elementGetByPath(fullPath);
        return elementResponse.body;
    }

    // Get event frames from element
    public async getEventFramesFromElement(elementWebId: string): Promise<ItemsEventFrame> {
        const eventFrameResponse = await this.elementAPI.elementGetEventFrames(elementWebId);
        return eventFrameResponse.body;
    }

    // Get event frames from database
    public async getEventFramesFromDatabase(databasePath: string): Promise<ItemsEventFrame> {
        const databaseResponse = await this.assetDatabaseAPI.assetDatabaseGetByPath(databasePath);
        const eventFrameResponse = await this.assetDatabaseAPI.assetDatabaseGetEventFrames(databaseResponse.body.WebId);
        return eventFrameResponse.body;
    }

    // Create event frame for database
    public async createEventFrameForDatabase(databasePath: string, eventFrame: EventFrame): Promise<void> {
        const databaseResponse = await this.assetDatabaseAPI.assetDatabaseGetByPath(databasePath);
        const eventframeCreateResponse = await this.assetDatabaseAPI.assetDatabaseCreateEventFrame(databaseResponse.body.WebId, eventFrame);
    }

    // Update event frame for database
    public async updateEventFrame(webId: string, eventFrame: EventFrame): Promise<void> {
        const test = await this.eventFrameAPI.eventFrameUpdate(webId, eventFrame);
    }

    // Init all API's from piwebapi with correct credentials
    private initAPI() {
        // Initialse api's
        if (this.user && this.password) {
            if (this.basePath) {
                this.pointAPI = new PointApi(this.user, this.password, this.basePath);
                this.streamAPI = new StreamApi(this.user, this.password, this.basePath);
                this.elementAPI = new ElementApi(this.user, this.password, this.basePath);
                this.eventFrameAPI = new EventFrameApi(this.user, this.password, this.basePath);
                this.assetDatabaseAPI = new AssetDatabaseApi(this.user, this.password, this.basePath);
            } else {
                this.pointAPI = new PointApi(this.user, this.password);
                this.streamAPI = new StreamApi(this.user, this.password);
                this.elementAPI = new ElementApi(this.user, this.password);
                this.eventFrameAPI = new EventFrameApi(this.user, this.password);
                this.assetDatabaseAPI = new AssetDatabaseApi(this.user, this.password);
            }
        } else {
            if (this.basePath) {
                this.pointAPI = new PointApi(this.basePath);
                this.streamAPI = new StreamApi(this.basePath);
                this.elementAPI = new ElementApi(this.basePath);
                this.eventFrameAPI = new EventFrameApi(this.basePath);
                this.assetDatabaseAPI = new AssetDatabaseApi(this.basePath);
            } else {
                this.pointAPI = new PointApi();
                this.streamAPI = new StreamApi();
                this.elementAPI = new ElementApi();
                this.eventFrameAPI = new EventFrameApi();
                this.assetDatabaseAPI = new AssetDatabaseApi();
            }
        }
    }
}
