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

    public setBasicAuth(user: string, password: string){
        this._user = user;
        this._password = password;
    };

    public setBasePath(basePath: string){
        this._basePath = basePath;
    };

    // Get value from PI point
    public async getPIPointData(serverName: string, pointName: string) : Promise<TimedValue> {

        // Get point with pointapi
        let pointapi: PointApi;
        if (this._user && this._password){
            if (this._basePath){
                pointapi = new PointApi(this._user,this._password,this._basePath);        
            }
            else{
                pointapi = new PointApi(this._user,this._password);
            }            
        }
        else{
            if (this._basePath){
                pointapi = new PointApi(this._basePath);        
            }
            else{
                pointapi = new PointApi();
            }      
        }
        const pointResponse = await pointapi.pointGetByPath(`\\\\${serverName}\\${pointName}`);
        
        // Get value with streamapi
        let streamapi: StreamApi;
        if (this._user && this._password){
            if (this._basePath){
                streamapi = new StreamApi(this._user,this._password,this._basePath);        
            }
            else{
                streamapi = new StreamApi(this._user,this._password);
            }            
        }
        else{
            if (this._basePath){
                streamapi = new StreamApi(this._basePath);        
            }
            else{
                streamapi = new StreamApi();
            }      
        }        
        const valueResponse = await streamapi.streamGetValue(pointResponse.body.WebId);
        
        // Return TimedValue
        return valueResponse.body;; 
    }

}


