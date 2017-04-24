/// <reference types="agenda" />
import Agenda = require("agenda");
export interface IPeriodicJob {
    config: {
        interval: string;
    };
    run(job: Agenda.Job, done: any): void;
}
