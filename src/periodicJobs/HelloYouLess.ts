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
        // Every 2 seconds cron notation
        interval: "*/2 * * * * *",
    };

    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    // Job run function
    public async run(job: Agenda.Job, done: any) {
        try {
            // Get YouLess data (Dutch Energy Monitor)
            const youLessResponse = await rp("http://172.16.70.13/a&f=j");
            // Parse string to data and define data format with interface
            const youLessData: IYouLess = JSON.parse(youLessResponse);
            // Check for watt peak
            const maxWatt: number = 8000;
            const isWattPeak = parseInt(youLessData.pwr, 10) >= maxWatt;

            if (isWattPeak) {
                // Create event frame and persist locally in job
                // (storing in AF will create to much latency for the if check)
                if (!job.attrs.data) {
                    const data = new EventFrame();
                    data.Name = "YouLess Power Peak " + new Date().toDateString();
                    data.StartTime = new Date().toISOString();
                    data.Description = `Youless power is starting to peak above ${maxWatt} with ${youLessData.pwr} Watt`;
                    job.attrs.data = data;
                }
            } else {
                // Close event frame persisted in job and store in AF database;
                if (job.attrs.data) {
                    const data = job.attrs.data as EventFrame;
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
