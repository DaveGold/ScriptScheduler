// Import Agenda
import Agenda = require("agenda");
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
import { IYouLess } from "../interfaces/IYouLess";

// Import class definitions
import { EventFrame } from "../apiclients/piwebapi";
// Import node modules
import rp = require("request-promise");

@injectable()
export class HelloYouLess implements IPeriodicJob {

    // Job config
    public config = {
        // Every 10 seconds cron notation
        interval: "*/2 * * * * *",
    };

    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    // Job run function
    public async run(job: Agenda.Job,done: any) {
        try {
            // Get YouLess data
            const youLessResponse = await rp("http://172.16.70.13/a&f=j");
            const youLessData: IYouLess = JSON.parse(youLessResponse);
            const maxWatt: number = 8000;
            const isWattPeak = parseInt(youLessData.pwr, 10) >= maxWatt;
            
            if (isWattPeak) { // Create event frame and store in job
                if (!job.attrs.data) {
                    let data = new EventFrame();
                    data.Name = "YouLess Power Peak" + new Date().toDateString();
                    data.StartTime = new Date().toISOString();
                    data.Description = `Youless power is starting to peaking above ${maxWatt} with ${youLessData.pwr} Watt`;
                    job.attrs.data = data;
                }
            } else { // Close event frame stored in job and store in database;
                if(job.attrs.data){
                    let data = job.attrs.data as EventFrame;
                    data.EndTime = new Date().toISOString();
                    await this.service.createEventFrameForDatabase("\\\\PIAF01\\YouLess", data);
                    job.attrs.data = null;
                }
            }
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
