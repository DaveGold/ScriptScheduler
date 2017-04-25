// Import Agenda
import Agenda = require("agenda");
// Import injectable and reflect metadata for dependency injection
import { inject, injectable } from "inversify";
import "reflect-metadata";
// Import interfaces for class implementation and dependency injection
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
// import specific external modules from node_modules
import fs = require('fs');
var csvWriter = require('csv-write-stream')

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
            var writer = csvWriter();
            writer.pipe(fs.createWriteStream("helloSinusoid.csv"),{flags: "a"});
            writer.write(result);
            writer.end();            
            done();
        } catch (error) {
            console.error(error);
            done();
        }
    }
}
