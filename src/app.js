"use strict";
exports.__esModule = true;
var processors_1 = require("./processors");
var periodicProc = new processors_1.PeriodicJobsProcessor();
periodicProc.runAgenda();
