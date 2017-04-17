
// Import injectable for dependency injection
import { injectable, inject } from "inversify";
import "reflect-metadata";

// Import interfaces
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

@injectable()
export class HelloSinusoid implements IPeriodicJob {

    constructor(@inject("IPIWebAPIService")private service: IPIWebAPIService){};

    // Job config
    public config = {
        // Every 10 seconds cron notation
        interval: "*/10 * * * * *",
    };

    // Job run function
    public async run(job: any, done: any) {

        try {
            this.service.setBasicAuth("webapiuser","!try3.14webapi!")   
            const result  = await this.service.getPIPointData("PISRV1","SINUSOID");
            console.log(result.Timestamp + " " + result.Value);
        }
        catch(error) {
            console.error(error);
        }
        done();

    }    
}
