"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processors_1 = require("./processors");
const periodicProc = new processors_1.PeriodicJobsProcessor();
periodicProc.runAgenda();
const triggeredProc = new processors_1.TriggeredJobsProcessor();
triggeredProc.runAgenda();
//# sourceMappingURL=index.js.map