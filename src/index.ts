/// <reference path="../node_modules/@types/agenda/index.d.ts" />

import { IPeriodicJob } from "./interfaces/IPeriodicJob";
import * as PeriodicJobs from "./periodicJobs/";
import Agenda = require("agenda");

async function runAgenda(): Promise<void> {

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
  // Add name external because not in configuration typings
  agenda.name("periodicJobsProcessor")

  // Read job definitions from import
  const keys = Object.keys(PeriodicJobs);
  
  for (const key of keys) {    
    const jobClass = (PeriodicJobs as any)[key];
    const periodicJob: IPeriodicJob = new jobClass(); 
    agenda.define(key, (job: any, done: any) => {
      periodicJob.run(job, done); 
    });
  }    

  // Wait for agenda to connect.
  agenda.on("ready", () => {
    for (const key of keys) {
      const jobClass = (PeriodicJobs as any)[key];
      const periodicJob: IPeriodicJob = new jobClass();
      agenda.every(periodicJob.config.interval, key);
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
