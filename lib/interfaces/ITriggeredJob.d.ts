/// <reference types="agenda" />
import Agenda = require("agenda");
export interface ITriggeredJob {
    getChannel(): Promise<string>;
    run(job: Agenda.Job, done: any): void;
}
