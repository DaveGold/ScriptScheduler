// Import Agenda
import Agenda = require("agenda");
// Import interfaces
import { ITriggeredJob } from "../interfaces/ITriggeredJob";
// Import IOC container
import "reflect-metadata";
import { container } from "../configs/ioc_config";
import request = require("request-promise");
const WebSocket = require("ws");

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
      // Define on class name and bind execution to run function
      agenda.define(triggeredJob.constructor.name, (job: Agenda.Job, done: any) => {
        triggeredJob.run(job, done);
      });
    }

    // Wait for agenda to connect.
    agenda.on("ready", async () => {
      for (const triggeredJob of triggeredJobs) {
        // Get wss url form job
        const url = await triggeredJob.getChannelURL();
        // Open wss channel with options (security)
        const ws = new WebSocket(url, null, triggeredJob.webSocketOptions);
        // Bind message event to immediately job excecution
        ws.on("message", (data: any) => {
          agenda.now(triggeredJob.constructor.name, data);
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
