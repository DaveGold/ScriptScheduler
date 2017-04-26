// Import Agenda
import Agenda = require("agenda");
// Import interfaces
import { ITriggeredJob } from "../interfaces/ITriggeredJob";
// Import IOC container
import "reflect-metadata";
import { container } from "../configs/ioc_config";
import { config } from "../configs/piwebapi_config";
import request = require("request-promise");
const WebSocket = require('ws');

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
    const triggeredJobs = container.getAll<ITriggeredJob>("ITriggeredJob");

    // Define job for each periodicJob
    for (const triggeredJob of triggeredJobs) {
      agenda.define(triggeredJob.constructor.name, (job: Agenda.Job, done: any) => {
        triggeredJob.run(job, done);
      });
    }

    // Hack for self signed certifications
    //process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

    // Wait for agenda to connect.
    agenda.on("ready", () => {  

      const opts = {
        rejectUnauthorized: false,
        headers: {
          "Authorization": 'Basic ' + new Buffer(config.username + ':' + config.password).toString('base64')
        }
      };

      for (const triggeredJob of triggeredJobs) {
        const ws = new WebSocket("wss://server2012r2dg.dev.magion.loc/piwebapi/streams/P0SArgDM8qXEynOzOPNm6QcAAQAAAAUEkyMDE2LkRFVi5NQUdJT04uTE9DXFNJTlVTT0lE/channel",null,opts);
        ws.on("message",function(data: any, flags: any){          
          agenda.now(triggeredJob.constructor.name,data);
        });     
      }

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
