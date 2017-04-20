"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const HelloSinusoid_1 = require("../periodicJobs/HelloSinusoid");
const HelloEventFrame_1 = require("../periodicJobs/HelloEventFrame");
const PIWebAPIService_1 = require("../services/PIWebAPIService");
const container = new inversify_1.Container();
exports.container = container;
container.bind("IPeriodicJob").to(HelloSinusoid_1.HelloSinusoid).inTransientScope();
container.bind("IPeriodicJob").to(HelloEventFrame_1.HelloEventFrame).inTransientScope();
container.bind("IPIWebAPIService").to(PIWebAPIService_1.PIWebAPIService).inTransientScope();
//# sourceMappingURL=ioc_config.js.map