
// Import injectable for dependency injection
import { injectable } from "inversify";
import "reflect-metadata";
// Import IPeriodic interface
import { IPeriodicJob } from "../interfaces/IPeriodicJob";

// Import request-promise-native with typings
/// <reference path="../../node_modules/@types/request-promise-native/index.d.ts" />
import rp = require("request-promise-native")

@injectable()
export class HelloSinusoid implements IPeriodicJob {
    
    public config = {
        // Every 10 seconds cron notation
        interval: "*/10 * * * * *",  
    };

    public async run(job: any, done: any): Promise<void> {

        const tag: string = "SINUSOID";
        let val = await this.getPITagData(tag);
        console.log(`Tag ${tag} has at timestamp ${val.Timestamp} the following value: ${val.Value}`);
        done();

    }

    public async getPITagData(tag: string){

        const user: string = "webapiuser";
        const pass: string = "!try3.14webapi!";
        const searchResultTag: any = await rp.get(`https://devdata.osisoft.com/piwebapi/search/query?q=${tag}`,{json:true}).auth(user,pass);
        const tagObject: any = await rp.get(searchResultTag.Items[0].Links.Self,{json:true}).auth(user,pass);
        const tagValue: any = await rp.get(tagObject.Links.Value,{json:true}).auth(user,pass);
        return tagValue;
        
    }
}
