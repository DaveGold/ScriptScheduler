import { TimedValue } from "../apiclients/piwebapi";
export interface IPIWebAPIService {
    setBasicAuth(user: string, password: string): void;
    setBasePath(basePath: string): void;
    getPIPointData(serverName: string, pointName: string): Promise<TimedValue>;
}
