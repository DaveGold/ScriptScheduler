import { PeriodicJobsProcessor, TriggeredJobsProcessor } from "./processors"

// const periodicProc = new PeriodicJobsProcessor();
// periodicProc.runAgenda();

const triggeredProc = new TriggeredJobsProcessor();
triggeredProc.runAgenda();