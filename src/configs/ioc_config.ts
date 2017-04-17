// Import Container for IOC
import { Container } from "inversify";

// Import interfaces
import { IPeriodicJob } from "../interfaces/IPeriodicJob";
import { IPIWebAPIService } from "../interfaces/IPIWebAPIService"

// Import conrete classes of interfaces
import { HelloSinusoid } from "../periodicJobs/HelloSinusoid";
import { PIWebAPIService } from "../services/PIWebAPIService";

// Create IOC Container
const container = new Container();

// Setup bindings
// Bind IPeriodicJob to HelloSinusoid which implements the IPeriodicJob interface
container.bind<IPeriodicJob>("IPeriodicJob").to(HelloSinusoid).inTransientScope();

// Bind services to self
container.bind<IPIWebAPIService>("IPIWebAPIService").to(PIWebAPIService).inTransientScope();

// Export Container
export { container };
