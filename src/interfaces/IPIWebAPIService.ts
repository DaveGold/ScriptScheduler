
// Import from piwebapi client
import { Element as AfElement, EventFrame, ItemsEventFrame, TimedValue } from "../apiclients/piwebapi";

export interface IPIWebAPIService {
    setBasicAuth(user: string, password: string): void;
    setBasePath(basePath: string): void;
    getPIPointDataByPath(fullPath: string, time?: string): Promise<TimedValue>;
    getPIPointChannelUrlByPath(fullPath: string): Promise<string>
    getElementByPath(fullPath: string): Promise<AfElement>;
    getEventFramesFromElement(elementWebId: string): Promise<ItemsEventFrame>;
    getEventFramesFromDatabase(databasePath: string): Promise<ItemsEventFrame>;
    createEventFrameForDatabase(databasePath: string, eventFrame: EventFrame): Promise<void>;
    updateEventFrame(webId: string, eventFrame: EventFrame): Promise<void>;
}
