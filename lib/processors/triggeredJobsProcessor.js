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
const piwebapi_config_1 = require("../configs/piwebapi_config");
const ws = require('nodejs-websocket');
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
            const periodicJobs = ioc_config_1.container.getAll("ITriggeredJob");
            for (const periodicJob of periodicJobs) {
                agenda.define(periodicJob.constructor.name, (job, done) => {
                    periodicJob.run(job, done);
                });
            }
            process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
            agenda.on("ready", () => {
                var options = {
                    extraHeaders: {
                        Authorization: 'Basic ' + new Buffer(piwebapi_config_1.config.username + ':' + piwebapi_config_1.config.password).toString('base64')
                    }
                };
                var conn = ws.connect("wss://devdata.osisoft.com/piwebapi/streams/P0SArgDM8qXEynOzOPNm6QcAAQAAAAUEkyMDE2XFNJTlVTT0lE/channel", options);
                conn.on("message", function (data) {
                    console.log(data);
                });
                agenda.start();
            });
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