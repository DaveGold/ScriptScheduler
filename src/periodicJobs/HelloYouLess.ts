
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
    public async run(job: any, done: any) {
        try {
            // Get YouLess data
            const youLessResponse = await rp("http://172.16.70.13/a&f=j");
            const data: IYouLess = JSON.parse(youLessResponse);
            const maxWatt: number = 8000;
            const isWattPeak = parseInt(data.pwr, 10) >= maxWatt;

            // Get eventframes last 8 hours
            const eventframes = await this.service.getEventFramesFromDatabase("\\\\PIAF01\\YouLess");

            if (isWattPeak) { // Create event frame if no open event frames exists
                if (!eventframes.Items.some((value) => !value.EndTime)) {
                    const ef = new EventFrame();
                    ef.Name = "YouLess Power Peak" + new Date().toDateString();
                    ef.StartTime = new Date();
                    ef.Description = `Youless power is starting to peaking above ${maxWatt} with ${data.pwr} Watt`;
                    this.service.createEventFrameForDatabase("\\\\PIAF01\\YouLess", ef);
                }
            } else { // Close open event frame if it does exists;
                const openFrames = eventframes.Items.filter((value) => !value.EndTime).forEach((value) => {
                    value.EndTime = new Date();
                    this.service.updateEventFrame(value);
                });
            }
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
