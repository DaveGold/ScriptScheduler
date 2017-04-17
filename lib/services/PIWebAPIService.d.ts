import "reflect-metadata";
import { TimedValue, Element, ItemsEventFrame } from "../apiclients/piwebapi";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
export declare class PIWebAPIService implements IPIWebAPIService {
    private _user;
    private _password;
    private _basePath;
    private _pointAPI;
    private _streamAPI;
    private _elementAPI;
    private _eventFrameAPI;
    setBasicAuth(user: string, password: string): void;
    setBasePath(basePath: string): void;
    private initAPI();
    getPointDataByPath(fullPath: string): Promise<TimedValue>;
    getElementByPath(fullPath: string): Promise<Element>;
    getEventFrameForElement(webId: string): Promise<ItemsEventFrame>;
}
