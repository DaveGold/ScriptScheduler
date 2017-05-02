/// <reference types="agenda" />
import Agenda = require("agenda");
export interface ITriggeredJob {
    webSocketOptions: {};
    getChannelURL(): Promise<string>;
    run(job: Agenda.Job, done: any): void;
}
