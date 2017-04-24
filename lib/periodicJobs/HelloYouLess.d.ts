/// <reference types="agenda" />
import Agenda = require("agenda");
import "reflect-metadata";
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
export declare class HelloYouLess implements IPeriodicJob {
    config: {
        interval: string;
    };
    private service;
    run(job: Agenda.Job, done: any): Promise<void>;
}
