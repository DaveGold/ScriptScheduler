// Import Container for IOC
import { Container } from "inversify";

// Import interfaces
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

// Import concrete classes of interfaces
import { HelloSinusoid } from "../periodicJobs/HelloSinusoid";
import { HelloEventFrame } from "../periodicJobs/HelloEventFrame";
import { HelloYouLess } from "../periodicJobs/HelloYouLess";
import { PIWebAPIService } from "../services/PIWebAPIService";

// Create IOC Container
const container = new Container();

// Setup bindings
// Bind IPeriodicJob to HelloSinusoid which implements the IPeriodicJob interface
container.bind<IPeriodicJob>("IPeriodicJob").to(HelloSinusoid).inTransientScope();
container.bind<IPeriodicJob>("IPeriodicJob").to(HelloEventFrame).inTransientScope();
container.bind<IPeriodicJob>("IPeriodicJob").to(HelloYouLess).inTransientScope();

// Bind services to self
container.bind<IPIWebAPIService>("IPIWebAPIService").to(PIWebAPIService).inTransientScope();

// Export Container
export { container };
