import express from "express";
import data from "./db.json";
const app = express();

app.use(express.json());
interface Article {
  id: string;
  title: string;
  author: string;
  body: string;
}
app.get(" http://localhost:3000/articles/:id", async (req, res) => {
  const id: string = req.params.id;
  let article: any = await data.articles.find((aid) => aid.id === id);

  article? res.send(article):res.status(404).send({error:"error"});
  }) ;

