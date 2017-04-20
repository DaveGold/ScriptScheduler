
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

@injectable()
export class HelloEventFrame implements IPeriodicJob {

    // Job config
    public config = {
        // Every 10 seconds cron notation
        interval: "*/60 * * * * *",
    };

    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    // Job run function
    public async run(job: any, done: any) {
        try {            
            const elementResponse  = await this.service.getElementByPath("\\\\PIAF01\\Demo OEE\\MAGION\\Netherlands\\TheHague\\Production\\Line1");           
            const eventFrameResponse = await this.service.getEventFramesForElement(elementResponse.WebId);  
            console.log(eventFrameResponse);             
        } catch (error) {
            console.error(error);
        }
        done();
    }
}
