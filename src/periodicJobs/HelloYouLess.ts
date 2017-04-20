
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IYouLess } from "../interfaces/IYouLess";
var rp = require('request-promise');
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

import { EventFrame } from "../apiclients/piwebapi";

@injectable()
export class HelloYouLess implements IPeriodicJob {

    // Job config
    public config = {
        // Every 10 seconds cron notation
        interval: "*/15 * * * * *",
    };   

    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    // Job run function
    public async run(job: any, done: any) {
        try {
            // Get YouLess data
            const youLessResponse = await rp("http://172.16.70.13/a&f=j");
            const data: IYouLess = JSON.parse(youLessResponse);
            
            // Create new eventframe
            const ef = new EventFrame();
            ef.Name = "YouLessTest" + new Date().toISOString();
            ef.StartTime = new Date(); 
            ef.Description = `Youless power is ${data.pwr}`;

            // Store eventframe in YouLess database
            this.service.createEventFrameForDatabase("\\\\PIAF01\\YouLess",ef);
            done();
        } catch (error) {
            console.error(error);
            done();
        }
        
    }
}


