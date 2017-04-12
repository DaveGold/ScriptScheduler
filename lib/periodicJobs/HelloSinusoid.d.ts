/// <reference path="../../node_modules/@types/request-promise-native/index.d.ts" />
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
export declare class HelloSinusoid implements IPeriodicJob {
    config: {
        interval: string;
    };
    run(job: any, done: any): Promise<void>;
    private getPITagData(tag);
}
