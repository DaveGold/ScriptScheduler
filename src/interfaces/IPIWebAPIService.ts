
// Import from piwebapi client
import { TimedValue } from "../apiclients/piwebapi"

export interface IPIWebAPIService {
       
    setBasicAuth(user: string, password: string) : void
    setBasePath(basePath: string): void    
    getPointDataByPath(fullPath: string, time?: string) : Promise<TimedValue>
    getElementByPath(fullPath: string) : any

}