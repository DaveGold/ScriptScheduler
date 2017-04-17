import "reflect-metadata";
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";
export declare class HelloSinusoid implements IPeriodicJob {
    private service;
    constructor(service: IPIWebAPIService);
    config: {
        interval: string;
    };
    run(job: any, done: any): Promise<void>;
}
