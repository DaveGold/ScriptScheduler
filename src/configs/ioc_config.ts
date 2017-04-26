// Import Container for IOC
import { Container } from "inversify";

// Import interfaces
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { ITriggeredJob } from "../interfaces/ITriggeredJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService";

// Import concrete classes of interfaces
import { HelloSinusoid as HelloSinusoidPeriodic } from "../periodicJobs/HelloSinusoid";
import { HelloYouLess } from "../periodicJobs/HelloYouLess";
import { HelloSinusoid as HelloSinusoidTriggered } from "../triggeredJobs/HelloSinusoid";
// Import services
import { PIWebAPIService } from "../services/PIWebAPIService";

// Create IOC Container
const container = new Container();

// Setup bindings
// Bind IPeriodicJob to HelloSinusoid which implements the IPeriodicJob interface
container.bind<IPeriodicJob>("IPeriodicJob").to(HelloSinusoidPeriodic).inTransientScope();
container.bind<IPeriodicJob>("IPeriodicJob").to(HelloYouLess).inTransientScope();

// Bind ITriggeredJob to HelloSinusoid which implements the IPeriodicJob interface
container.bind<ITriggeredJob>("ITriggeredJob").to(HelloSinusoidTriggered).inTransientScope();

// Bind services to self
container.bind<IPIWebAPIService>("IPIWebAPIService").to(PIWebAPIService).inTransientScope();

// Export Container
export { container };
