import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

// Parse the layout and create the route config
const routes = constructRoutes(microfrontendLayout);

// Function to load Module Federation remotes
const loadModule = async (name) => {
  if (name === "@org/react-mfe") {
    const module = await import("@org/react-mfe/App");
    return module.default;
  } else if (name === "@org/vue-mfe") {
    const module_1 = await import("@org/vue-mfe/App");
    return module_1.default;
  }
};

// Create applications config
const applications = constructApplications({
  routes,
  loadApp: ({ name }) => loadModule(name),
});

// Create the layout engine
const layoutEngine = constructLayoutEngine({ routes, applications });

// Register all applications
applications.forEach(registerApplication);

// Start single-spa
start({
  urlRerouteOnly: true,
});
