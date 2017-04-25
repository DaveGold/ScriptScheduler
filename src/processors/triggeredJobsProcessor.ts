// Import Agenda
import Agenda = require("agenda");
// Import interfaces
import { ITriggeredJob } from "../interfaces/ITriggeredJob";
// Import IOC container
import "reflect-metadata";
import { container } from "../configs/ioc_config";
import WebSocket = require("ws");
import { config } from "../configs/piwebapi_config";
const ws = require('nodejs-websocket')

export class TriggeredJobsProcessor {

  public async runAgenda(): Promise<void> {

    // Setup Agenda with mongodb connection and all parameters
    const dbConnectionString = "mongodb://localhost:27017/scriptScheduler";
    const agenda = new Agenda({
      db: { address: dbConnectionString, collection: "triggeredJobs" },
      defaultConcurrency: 5,
      defaultLockLifetime: 10000,
      defaultLockLimit: 0,
      lockLimit: 0,
      maxConcurrency: 20,
      processEvery: "1 seconds",
    });
    agenda.name("triggeredJobsProcessor"); // Add name external because not in configuration typings

    // Resolve IPeriodic Jobs with IOC container
    const periodicJobs = container.getAll<ITriggeredJob>("ITriggeredJob");

    // Define job for each periodicJob
    for (const periodicJob of periodicJobs) {
      agenda.define(periodicJob.constructor.name, (job: Agenda.Job, done: any) => {
        periodicJob.run(job, done);
      });
    }

    // Hack for self signed certifications
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

    // Wait for agenda to connect.
    agenda.on("ready", () => {

      var options = {
        extraHeaders: {
          Authorization: 'Basic ' + new Buffer(config.username + ':' + config.password).toString('base64')
        }
      }

      var conn = ws.connect("wss://devdata.osisoft.com/piwebapi/streams/P0SArgDM8qXEynOzOPNm6QcAAQAAAAUEkyMDE2XFNJTlVTT0lE/channel",options)
      conn.on("message",function(data: any){
        console.log(data);
      })


      // for (const periodicJob of periodicJobs) {
      //   agenda.every(periodicJob.config.interval, periodicJob.constructor.name);
      // }
      agenda.start();
    });

    // Log to console
    agenda.on("start", (job: Agenda.Job) => {
      console.log(`Job ${job.attrs.name} is starting at ${new Date().toISOString()}`);
    });
    agenda.on("complete", (job: Agenda.Job) => {
      console.log(`Job ${job.attrs.name} is finished at ${new Date().toISOString()}`);
    });
    agenda.on("fail", (job: Agenda.Job) => {
      console.log(`Job ${job.attrs.name} has failed at ${new Date().toISOString()}`);
    });
  }
}
