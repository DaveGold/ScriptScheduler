import "reflect-metadata";
import { Element as AfElement, EventFrame, ItemsEventFrame, TimedValue } from "../apiclients/piwebapi";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
export declare class PIWebAPIService implements IPIWebAPIService {
    private user;
    private password;
    private basePath;
    private pointAPI;
    private streamAPI;
    private elementAPI;
    private eventFrameAPI;
    private assetDatabaseAPI;
    constructor();
    setBasicAuth(user: string, password: string): void;
    setBasePath(basePath: string): void;
    getPIPointDataByPath(fullPath: string): Promise<TimedValue>;
    getElementByPath(fullPath: string): Promise<AfElement>;
    getEventFramesForElement(elementWebId: string): Promise<ItemsEventFrame>;
    createEventFrameForElement(databasePath: string, elementWebId: string): Promise<void>;
    createEventFrameForDatabase(databasePath: string, eventFrame: EventFrame): Promise<void>;
    private initAPI();
}
