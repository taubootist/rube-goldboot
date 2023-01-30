import { NextFunction, Request, Response, Router } from "express";

import Controller from "./controller";

class TestController implements Controller {
  public path = "/test";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/hello`, this.hello);
  }

  private hello = async (_: Request, response: Response, __: NextFunction) => {
    response.status(200).send(`hello back at ya!`);
  };
}

export default TestController;
