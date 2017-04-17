// Import Agenda
import Agenda = require("agenda");

// Import interfaces
import { IPeriodicJob } from "./interfaces/IPeriodicJob";

// Import IOC container
import "reflect-metadata";
import { container } from "./configs/ioc_config";

async function runAgenda(): Promise<void> {

  // Setup Agenda with mongodb connection and all parameters
  const dbConnectionString = "mongodb://localhost:27017/scriptScheduler";
  const agenda = new Agenda({
    db: {address: dbConnectionString, collection: "periodicsJobs"},
    defaultConcurrency: 5,
    defaultLockLifetime: 10000,
    defaultLockLimit: 0,
    lockLimit: 0,
    maxConcurrency: 20,
    processEvery: "1 seconds",
  });
  agenda.name("periodicJobsProcessor"); // Add name external because not in configuration typings

  // Resolve IPeriodic Jobs with IOC container
  const periodicJobs = container.getAll<IPeriodicJob>("IPeriodicJob");

  // Define job for each periodicJob
  for (const periodicJob of periodicJobs){
    agenda.define(periodicJob.constructor.name, (job: any, done: any) => {
      periodicJob.run(job, done);
    });
  }

  // Wait for agenda to connect.
  agenda.on("ready", () => {
    for (const periodicJob of periodicJobs){
      agenda.every(periodicJob.config.interval, periodicJob.constructor.name);
    }
    agenda.start();
  });

  agenda.on("start", (job: any) => {
    console.log(`Job ${job.attrs.name} is starting at ${new Date().toISOString()}`);
  });

  agenda.on("complete", (job: any) => {
    console.log(`Job ${job.attrs.name} is finished at ${new Date().toISOString()}`);
  });

  agenda.on("fail", (job: any) => {
    console.log(`Job ${job.attrs.name} has failed at ${new Date().toISOString()}`);
  });

}

runAgenda();
