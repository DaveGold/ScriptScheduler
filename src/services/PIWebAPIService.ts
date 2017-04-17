// Import injectable for dependency injection
import { injectable } from "inversify";
import "reflect-metadata";

// Import piwebapi client
import { PointApi, StreamApi, TimedValue } from "../apiclients/piwebapi"
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

@injectable()
export class PIWebAPIService implements IPIWebAPIService {
    
    private _user: string;
    private _password: string;
    private _basePath: string;   
    private pointapi: PointApi;
    private streamapi: StreamApi;

    public setBasicAuth(user: string, password: string){
        this._user = user;
        this._password = password;
    };

    public setBasePath(basePath: string){
        this._basePath = basePath;
    };

    private initAPI(){
        // Initialse api's
        let pointapi: PointApi;
        let streamapi: StreamApi;
        if (this._user && this._password){
            if (this._basePath){
                pointapi = new PointApi(this._user,this._password,this._basePath);  
                streamapi = new StreamApi(this._user,this._password,this._basePath);       
            }
            else{
                pointapi = new PointApi(this._user,this._password);
                streamapi = new StreamApi(this._user,this._password);
            }            
        }
        else{
            if (this._basePath){
                pointapi = new PointApi(this._basePath);
                streamapi = new StreamApi(this._basePath);        
            }
            else{
                pointapi = new PointApi();
                streamapi = new StreamApi();
            }      
        }
    }

    // Get value from PI point
    public async getPIPointData(serverName: string, pointName: string) : Promise<TimedValue> {

        this.initAPI();        

        // Get point value
        const pointResponse = await this.pointapi.pointGetByPath(`\\\\${serverName}\\${pointName}`); 
        const valueResponse = await this.streamapi.streamGetValue(pointResponse.body.WebId);
        
        // Return TimedValue
        return valueResponse.body;; 
    }

}


