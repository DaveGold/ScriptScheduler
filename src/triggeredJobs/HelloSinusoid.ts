// Import Agenda
import Agenda = require("agenda");
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { ITriggeredJob } from "../interfaces/ITriggeredJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
import { TimedValue } from "../apiclients/piwebapi";
import * as fs from "mz/fs";
const csv = require("csv.js");

@injectable()
export class HelloSinusoid implements ITriggeredJob {
    
    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    public getChannel(): Promise<string> {
        return this.service.getPIPointChannelUrlByPath("\\\\PI2016\\SINUSOID");
    }    

    // Job run function
    public async run(job: Agenda.Job, done: any): Promise<void> {
        try {
            // Define constants for csv writing
            const newLine = "\r\n";
            const dateString: string = `${new Date().getDate()}_${new Date().getMonth()}_${new Date().getFullYear()}`;
            const file = `output/helloSinusoid_${dateString}.csv`;
            let channelData = JSON.parse((job.attrs.data as any) as string);
            let values: Array<TimedValue> = channelData.Items[0].Items;                   

            //Append to existing file or create new file with headers
            if (await fs.exists(file)) {
                const encoded = csv.encode(values, ",", false) + newLine;
                await fs.appendFile(file, encoded);
            } else {
                const encoded = csv.encode(values, ",", true) + newLine;
                await fs.writeFile(file, encoded);
            }      
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
