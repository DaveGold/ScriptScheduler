"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const HelloSinusoid_1 = require("../periodicJobs/HelloSinusoid");
let container = new inversify_1.Container();
exports.container = container;
container.bind("IPeriodicJob").to(HelloSinusoid_1.HelloSinusoid).inTransientScope();
//# sourceMappingURL=ioc_config.js.map