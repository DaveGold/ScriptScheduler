import { Element as AfElement, ItemsEventFrame, TimedValue } from "../apiclients/piwebapi";
export interface IPIWebAPIService {
    setBasicAuth(user: string, password: string): void;
    setBasePath(basePath: string): void;
    getElementByPath(fullPath: string): Promise<AfElement>;
    getEventFramesForElement(webId: string): Promise<ItemsEventFrame>;
    createEventFrameForElement(databasePath: string, elementWebId: string): Promise<void>;
    getPIPointDataByPath(fullPath: string): Promise<TimedValue>;
}
