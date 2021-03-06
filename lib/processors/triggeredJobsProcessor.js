"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Agenda = require("agenda");
require("reflect-metadata");
const ioc_config_1 = require("../configs/ioc_config");
const WebSocket = require("ws");
class TriggeredJobsProcessor {
    runAgenda() {
        return __awaiter(this, void 0, void 0, function* () {
            const dbConnectionString = "mongodb://localhost:27017/scriptScheduler";
            const agenda = new Agenda({
                db: { address: dbConnectionString, collection: "triggeredJobs" },
                defaultConcurrency: 5,
                defaultLockLifetime: 10000,
                defaultLockLimit: 0,
                lockLimit: 0,
                maxConcurrency: 20,
                processEvery: "1 seconds",
            });
            agenda.name("triggeredJobsProcessor");
            const triggeredJobs = ioc_config_1.container.getAll("ITriggeredJob");
            for (const triggeredJob of triggeredJobs) {
                agenda.define(triggeredJob.constructor.name, (job, done) => {
                    triggeredJob.run(job, done);
                });
            }
            agenda.on("ready", () => __awaiter(this, void 0, void 0, function* () {
                for (const triggeredJob of triggeredJobs) {
                    const url = yield triggeredJob.getChannelURL();
                    const ws = new WebSocket(url, null, triggeredJob.webSocketOptions);
                    ws.on("message", (data) => {
                        agenda.now(triggeredJob.constructor.name, data);
                    });
                }
                agenda.start();
            }));
            agenda.on("start", (job) => {
                console.log(`Job ${job.attrs.name} is starting at ${new Date().toISOString()}`);
            });
            agenda.on("complete", (job) => {
                console.log(`Job ${job.attrs.name} is finished at ${new Date().toISOString()}`);
            });
            agenda.on("fail", (job) => {
                console.log(`Job ${job.attrs.name} has failed at ${new Date().toISOString()}`);
            });
        });
    }
}
exports.TriggeredJobsProcessor = TriggeredJobsProcessor;
//# sourceMappingURL=triggeredJobsProcessor.js.map