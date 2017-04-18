// Import injectable for dependency injection
import { injectable } from "inversify";
import "reflect-metadata";

// Import piwebapi client
import {
    Element as AfElement, ElementApi, EventFrameApi, ItemsEventFrame, PointApi, StreamApi, TimedValue,
} from "../apiclients/piwebapi";
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

    constructor() {
        this.initAPI();
    }

    // Set credentials
    public setBasicAuth(user: string, password: string) {
        this.user = user;
        this.password = password;
        this.initAPI();
    }

    // Override base path piwebapi
    public setBasePath(basePath: string) {
        this.basePath = basePath;
        this.initAPI();
    }

    // Get value from PI point path or AF path
    public async getPointDataByPath(fullPath: string): Promise<TimedValue> {
        const pointResponse = await this.pointAPI.pointGetByPath(fullPath);
        const valueResponse = await this.streamAPI.streamGetValue(pointResponse.body.WebId);
        return valueResponse.body;
    }

    // Get element from AF path
    public async getElementByPath(fullPath: string): Promise<AfElement> {
        const elementResponse = await this.elementAPI.elementGetByPath(fullPath);
        return elementResponse.body;
    }

    // Get event frame from AF path
    public async getEventFrameForElement(webId: string): Promise<ItemsEventFrame> {
        const eventFrameResponse = await this.elementAPI.elementGetEventFrames(webId);
        return eventFrameResponse.body;
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
            } else {
                this.pointAPI = new PointApi(this.user, this.password);
                this.streamAPI = new StreamApi(this.user, this.password);
                this.elementAPI = new ElementApi(this.user, this.password);
                this.eventFrameAPI = new EventFrameApi(this.user, this.password);
            }
        } else {
            if (this.basePath) {
                this.pointAPI = new PointApi(this.basePath);
                this.streamAPI = new StreamApi(this.basePath);
                this.elementAPI = new ElementApi(this.basePath);
                this.eventFrameAPI = new EventFrameApi(this.basePath);
            } else {
                this.pointAPI = new PointApi();
                this.streamAPI = new StreamApi();
                this.elementAPI = new ElementApi();
                this.eventFrameAPI = new EventFrameApi();
            }
        }
    }
}
