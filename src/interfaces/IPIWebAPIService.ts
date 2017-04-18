
// Import from piwebapi client
import { Element as AfElement, ItemsEventFrame, TimedValue } from "../apiclients/piwebapi";

export interface IPIWebAPIService {
    setBasicAuth(user: string, password: string): void;
    setBasePath(basePath: string): void;
    getPointDataByPath(fullPath: string, time?: string): Promise<TimedValue>;
    getElementByPath(fullPath: string): Promise<AfElement>;
    getEventFrameForElement(webId: string): Promise<ItemsEventFrame>;
}
