// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
// Import classes from PiWebAPI for clearer Typescript Typings
import { TimedValue } from "../apiclients/piwebapi";

@injectable()
export class HelloSinusoid implements IPeriodicJob {

    // Job config
    public config = {
        // Every 15 seconds cron notation
        interval: "*/15 * * * * *",
    };

    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    // Job run function
    public async run(job: any, done: any) {
        try {
            // Await actual Sinusoid value from PIWebAPI service with basic auth defined in configs/piwebapi_config.ts
            const result: TimedValue = await this.service.getPIPointDataByPath("\\\\PI2016\\SINUSOID");
            // Log results to console
            console.log(`Hello Periodic Sinusoid with value ${result.Value} at timestamp ${result.Timestamp}`);
            // Call done function when job is finished
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
