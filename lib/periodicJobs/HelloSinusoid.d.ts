import "reflect-metadata";
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { TimedValue } from "../clients/piwebapi";
export declare class HelloSinusoid implements IPeriodicJob {
    config: {
        interval: string;
    };
    run(job: any, done: any): Promise<void>;
    getPITagData(tag: string): Promise<TimedValue>;
}
