// Import Agenda
import Agenda = require("agenda");
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { ITriggeredJob } from "../interfaces/ITriggeredJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
// Import classes
import { TimedValue } from "../apiclients/piwebapi";
// Import security config
import { config } from "../configs/piwebapi_config";
// Import node modules 
import * as fs from "mz/fs";
const csv = require("csv.js");

@injectable()
export class HelloSinusoid implements ITriggeredJob {

    // Get instance of PIWebAPIService with dependency injection
    @inject("IPIWebAPIService")
    private service: IPIWebAPIService;

    // Set Websocket options object, bypass untrusted certificate check and add Basic Authentication to header
    public webSocketOptions = {
        rejectUnauthorized: false,
        headers: {
            "Authorization": 'Basic ' + new Buffer(config.username + ':' + config.password).toString('base64')
        }
    };
    
    // Get wss url string with no initial values included
    public getChannelURL(): Promise<string> {
        return this.service.getPIPointChannelUrlByPath("\\\\PI2016\\SINUSOID", false);
    }

    // Job run function
    public async run(job: Agenda.Job, done: any): Promise<void> {
        try {
            // Define constants for csv writing
            const newLine = "\r\n";
            const dateString: string = `${new Date().getDate()}_${new Date().getMonth()}_${new Date().getFullYear()}`;
            // Store file in output directory with data in file name
            const file = `output/helloSinusoid_${dateString}.csv`;
            // Parse job.attrs.data in typescript acceptable way to JSON object
            let channelData = JSON.parse((job.attrs.data as any) as string);
            // Create array of changed values
            let values: Array<TimedValue> = channelData.Items[0].Items;

            //Append to existing csv file or create new file with headers
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
