
// Import injectable for dependency injection
import { injectable } from "inversify";
import "reflect-metadata";

// Import IPeriodic interface
import { IPeriodicJob } from "../interfaces/IPeriodicJob";

// Import piwebapi client
import { PointApi, StreamApi, TimedValue } from "../clients/piwebapi"

@injectable()
export class HelloSinusoid implements IPeriodicJob {

    // Job config
    public config = {
        // Every 10 seconds cron notation
        interval: "*/10 * * * * *",
    };

    // Job run function
    public async run(job: any, done: any) {
        try {
            const result: TimedValue = await this.getPITagData("SINUSOID");
            console.log(result.Timestamp + " " + result.Value);
        }
        catch(error) {
            console.error(error);
        }
        done();
    }

    // PIWebAPI help function
    public async getPITagData(tag: string) : Promise<TimedValue> {

        // default url and basic auth
        const user: string = "webapiuser";
        const pass: string = "!try3.14webapi!";
        const baseUrl: string = "https://devdata.osisoft.com/piwebapi";
        
        // get point with pointapi
        const pointapi = new PointApi(user,pass,baseUrl);
        const pointResponse = await pointapi.pointGetByPath(`\\\\PISRV1\\${tag}`);
               
        // get value with streamapi
        const streamapi = new StreamApi(user,pass,baseUrl);
        const valueResponse = await streamapi.streamGetValue(pointResponse.body.WebId);
        const value: TimedValue = valueResponse.body;

        return value; 
    }
}
