export interface IPeriodicJob {
    config: {
        interval: string;
    };
    run(job: any, done: any): void;
}
