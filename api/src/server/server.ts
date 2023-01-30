import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import Controller from "./controllers/controller";
import errorMiddleware from "./middleware/error.middleware";

class Server {
  public app: express.Application;
  public httpsServer: any;

  constructor(controllers: Controller[]) {
    this.app = express();

    if (process.env.PORT) this.app.use(cors());
    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeErrorHandling();
  }

  public listen() {
    const port = process.env.PORT ? process.env.PORT : 80;
    this.app.listen(port, () => {
      console.log(`App listening on port: ${port}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.json({ limit: "50mb" }));
    this.app.use(
      express.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
      })
    );
    this.app.use(cookieParser());
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }
}

export default Server;
