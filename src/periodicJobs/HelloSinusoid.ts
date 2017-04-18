
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
        // Every 10 seconds cron notation
        interval: "*/15 * * * * *",
    };

    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    // Job run function
    public async run(job: any, done: any) {
        try {
            this.service.setBasicAuth("webapiuser", "!try3.14webapi!");
            const result  = await this.service.getPointDataByPath("\\\\PISRV1\\SINUSOID");
            console.log(result.Timestamp + " " + result.Value);
        } catch (error) {
            console.error(error);
        }
        done();
    }
}
