/// <reference types="agenda" />
import Agenda = require("agenda");
import "reflect-metadata";
import { ITriggeredJob } from "../interfaces/ITriggeredJob";
export declare class HelloSinusoid implements ITriggeredJob {
    private service;
    webSocketOptions: {
        rejectUnauthorized: boolean;
        headers: {
            "Authorization": string;
        };
    };
    getChannelURL(): Promise<string>;
    run(job: Agenda.Job, done: any): Promise<void>;
}
