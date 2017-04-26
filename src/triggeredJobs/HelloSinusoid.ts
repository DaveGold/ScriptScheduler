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
            resolve("wss://server2012r2dg.dev.magion.loc/piwebapi/streams/P0j0AfYqUlKkmLcdB1BPOH5QAQAAAAUElcU0lOVVNPSUQ/channel");
        })
        return p;
    }    

    // Job run function
    public async run(job: Agenda.Job, done: any): Promise<void> {
        try {   
            console.log("hello from triggered helloSinusoid",job.attrs.data);       
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
