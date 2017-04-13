
// Import injectable for dependency injection
import { injectable } from "inversify";
import "reflect-metadata";
// Import IPeriodic interface
import { IPeriodicJob } from "../interfaces/IPeriodicJob";

// Import request-promise-native
import rp = require("request-promise-native");

@injectable()
export class HelloSinusoid implements IPeriodicJob {

    public config = {
        // Every 10 seconds cron notation
        interval: "*/10 * * * * *",
    };

    public async run(job: any, done: any): Promise<void> {

        const tag: string = "SINUSOID";
        const value = await this.getPITagData(tag);
        console.log(`Tag ${tag} has at timestamp ${value.Timestamp} the following value: ${value.Value}`);
        done();

    }

    public async getPITagData(tag: string) {

        const user: string = "webapiuser";
        const pass: string = "!try3.14webapi!";
        const url: string = `https://devdata.osisoft.com/piwebapi/search/query?q=${tag}`;
        const searchResultTag: any = await rp.get(url, { json : true } ).auth(user, pass);
        const tagObject: any = await rp.get(searchResultTag.Items[0].Links.Self, { json : true } ).auth(user, pass);
        const tagValue: any = await rp.get(tagObject.Links.Value, { json : true }).auth(user, pass);
        return tagValue;

    }
}
