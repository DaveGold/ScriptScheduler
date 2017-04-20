import "reflect-metadata";
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
export declare class HelloYouLess implements IPeriodicJob {
    config: {
        interval: string;
    };
    private service;
    run(job: any, done: any): Promise<void>;
}
