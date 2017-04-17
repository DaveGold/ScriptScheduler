// Import injectable for dependency injection
import { injectable } from "inversify";
import "reflect-metadata";

// Import piwebapi client
import { PointApi, StreamApi, TimedValue, Element, ElementApi, ItemsEventFrame, EventFrameApi } from "../apiclients/piwebapi"
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

@injectable()
export class PIWebAPIService implements IPIWebAPIService {

    private _user: string;
    private _password: string;
    private _basePath: string;   
    private _pointAPI: PointApi;
    private _streamAPI: StreamApi;
    private _elementAPI: ElementApi;
    private _eventFrameAPI: EventFrameApi;

    public setBasicAuth(user: string, password: string){
        this._user = user;
        this._password = password;
    };

    public setBasePath(basePath: string){
        this._basePath = basePath;
    };

    private initAPI(){

        if (this._pointAPI && this._streamAPI && this._elementAPI && this._eventFrameAPI) {
            // do nothing
        }
        else{
            // Initialse api's        
            if (this._user && this._password) {
                if (this._basePath) {
                    this._pointAPI = new PointApi(this._user, this._password, this._basePath);
                    this._streamAPI = new StreamApi(this._user, this._password, this._basePath);
                    this._elementAPI = new ElementApi(this._user, this._password, this._basePath);
                    this._eventFrameAPI = new EventFrameApi(this._user, this._password, this._basePath);
                }
                else {
                    this._pointAPI = new PointApi(this._user, this._password);
                    this._streamAPI = new StreamApi(this._user, this._password);
                    this._elementAPI = new ElementApi(this._user, this._password);
                    this._eventFrameAPI = new EventFrameApi(this._user, this._password);
                }
            }
            else {
                if (this._basePath) {
                    this._pointAPI = new PointApi(this._basePath);
                    this._streamAPI = new StreamApi(this._basePath);
                    this._elementAPI = new ElementApi(this._basePath);
                    this._eventFrameAPI = new EventFrameApi(this._basePath);
                }
                else {
                    this._pointAPI = new PointApi();
                    this._streamAPI = new StreamApi();
                    this._elementAPI = new ElementApi();
                    this._eventFrameAPI = new EventFrameApi();
                }
            }
        }
        
    }

    // Get value from PI point path or AF path
    public async getPointDataByPath(fullPath: string): Promise<TimedValue> {

        this.initAPI();        

        // Get point value
        const pointResponse = await this._pointAPI.pointGetByPath(fullPath); 
        const valueResponse = await this._streamAPI.streamGetValue(pointResponse.body.WebId);
        
        // Return TimedValue
        return valueResponse.body;
    }

    // Get element from AF path
    public async getElementByPath(fullPath: string): Promise<Element> {
          
          this.initAPI();
          const elementResponse = await this._elementAPI.elementGetByPath(fullPath);
          return elementResponse.body;

    }

    // Get element from AF path
    public async getEventFrameForElement(webId: string): Promise<ItemsEventFrame> {
          
          this.initAPI();
          const eventFrameResponse = await this._elementAPI.elementGetEventFrames(webId)
          return eventFrameResponse.body;

    }




   

}


