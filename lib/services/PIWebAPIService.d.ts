import "reflect-metadata";
import { TimedValue } from "../apiclients/piwebapi";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
export declare class PIWebAPIService implements IPIWebAPIService {
    private _user;
    private _password;
    private _basePath;
    constructor();
    setBasicAuth(user: string, password: string): void;
    setBasePath(basePath: string): void;
    getPIPointData(serverName: string, pointName: string): Promise<TimedValue>;
}
