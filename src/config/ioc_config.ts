// Import Container for IOC
import { Container } from "inversify";

// Import interfaces
import { IPeriodicJob } from "../interfaces/IPeriodicJob";

// Import conrete classes of interfaces
import { HelloSinusoid } from "../periodicJobs/HelloSinusoid";

// Create IOC Container
const container = new Container();

// Setup bindings
// Bind IPeriodicJob to HelloSinusoid which implements the IPeriodicJob interface
container.bind<IPeriodicJob>("IPeriodicJob").to(HelloSinusoid).inTransientScope();

// Export Container
export { container };
