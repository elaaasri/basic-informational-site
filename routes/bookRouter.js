import { Router } from "express";

const bookRouter = Router();
bookRouter.get("/", (req, res) => res.send("Book Author"));

export default bookRouter;
