// Import Agenda
import Agenda = require("agenda");
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
// import specific external modules from node_modules
import * as fs from "mz/fs";
const csv = require("csv.js");

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
            // Await actual Sinusoid value from PIWebAPI service with basic auth defined in configs/piwebapi_config.ts
            const result = await this.service.getPIPointDataByPath("\\\\PI\\SINUSOID");
            // Define constants for csv writing
            const newLine = "\r\n";
            const dateString: string = `${new Date().getDate()}_${new Date().getMonth()}_${new Date().getFullYear()}`;
            const file = `output/helloSinusoid_${dateString}.csv`;
            // Append to existing file or create new file
            if (await fs.exists(file)) {
                const encoded = csv.encode(result, ",", false) + newLine;
                await fs.appendFile(file, encoded);
            } else {
                const encoded = csv.encode(result, ",", true) + newLine;
                await fs.writeFile(file, encoded);
            }
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
