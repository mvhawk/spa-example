import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@microfontend/mf-header",
  app: () => System.import("@microfontend/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@microfontend/mf-main",
  app: () => System.import("@microfontend/mf-main"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@microfontend/mf-images",
  app: () => System.import("@microfontend/mf-images"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@microfontend/mf-react",
  app: () => System.import("@microfontend/mf-react"),
  activeWhen: ["/prueba"]
});

start({
  urlRerouteOnly: true,
});
