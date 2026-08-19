import { Router } from "express";
import { getAuthorByIdController } from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", getAuthorByIdController);

export default authorRouter;
