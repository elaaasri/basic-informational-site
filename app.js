import express from "express";
import { fileURLToPath } from "url";
import path from "path";
import authorRouter from "./routes/authorRouter.js";
import bookRouter from "./routes/bookRouter.js";
import indexRouter from "./routes/indexRouter.js";

const app = express();
const PORT = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
