"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const HelloSinusoid_1 = require("../periodicJobs/HelloSinusoid");
const HelloYouLess_1 = require("../periodicJobs/HelloYouLess");
const HelloSinusoid_2 = require("../triggeredJobs/HelloSinusoid");
const PIWebAPIService_1 = require("../services/PIWebAPIService");
const container = new inversify_1.Container();
exports.container = container;
container.bind("IPeriodicJob").to(HelloSinusoid_1.HelloSinusoid).inTransientScope();
container.bind("IPeriodicJob").to(HelloYouLess_1.HelloYouLess).inTransientScope();
container.bind("ITriggeredJob").to(HelloSinusoid_2.HelloSinusoid).inTransientScope();
container.bind("IPIWebAPIService").to(PIWebAPIService_1.PIWebAPIService).inTransientScope();
//# sourceMappingURL=ioc_config.js.map