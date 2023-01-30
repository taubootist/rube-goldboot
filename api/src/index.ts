import "colors";

import dotenv from "dotenv";
import util from "util";

import { initServices } from "./logic/services/container.service";
import Controller from "./server/controllers/controller";
import TestController from "./server/controllers/test.controller";
import Server from "./server/server";

util.inspect.defaultOptions = { depth: null };

(async function () {
  try {
    dotenv.config();
    console.log(`ENV_NAME: ${process.env.ENV_NAME || ""}`);

    await initServices();
    const app = new Server([new TestController()]);
    Object.assign(global, { WebSocket: require("ws") });
    app.listen();
  } catch (error) {
    console.log(error);
  }
})();
