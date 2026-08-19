import { Router } from "express";
import { fileURLToPath } from "url";
import path from "path";

const indexRouter = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});
indexRouter.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../about.html"));
});
indexRouter.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../contact.html"));
});

export default indexRouter;
