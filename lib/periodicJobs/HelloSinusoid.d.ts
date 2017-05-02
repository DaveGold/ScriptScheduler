import "reflect-metadata";
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
export declare class HelloSinusoid implements IPeriodicJob {
    config: {
        interval: string;
    };
    private service;
    run(job: any, done: any): Promise<void>;
}
