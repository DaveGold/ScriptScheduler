// Import Agenda
import Agenda = require("agenda");
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

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
    public async run(job: Agenda.Job, done: any) {
        try {
            const result  = await this.service.getPIPointDataByPath("\\\\PI\\SINUSOID");            
            console.log(result.Timestamp + " " + result.Value);
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
