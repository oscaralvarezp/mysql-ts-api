import { Request, Response } from "express";

class IndexController {

    indexWelcome(req: Request, res: Response): Response {
        return res.json({ message: "Welcome to my API" });
    }

}

const indexController = new IndexController();
export default indexController;