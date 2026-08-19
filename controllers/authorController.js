import { getAuthorById } from "../db.js";

async function getAuthorByIdController(req, res) {
  const { authorId } = req.params;

  const author = await getAuthorById(Number(authorId));

  if (!author) {
    res.status(404).send("Author not found");
    return;
  }

  res.send(`Author Name: ${author.name}`);
}

export { getAuthorByIdController };
