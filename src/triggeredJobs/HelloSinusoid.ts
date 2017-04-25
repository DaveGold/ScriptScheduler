// Import Agenda
import Agenda = require("agenda");
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { ITriggeredJob } from "../interfaces/ITriggeredJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

@injectable()
export class HelloSinusoid implements ITriggeredJob {
    
    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    public async getChannel(): Promise<string> {
        let p = new Promise<string>((resolve) =>{
            resolve("wss://devdata.osisoft.com/piwebapi/streams/P0SArgDM8qXEynOzOPNm6QcAAQAAAAUEkyMDE2XFNJTlVTT0lE/channel");
        })
        return p;
    }    

    // Job run function
    public async run(job: Agenda.Job, done: any): Promise<void> {
        try {            
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
