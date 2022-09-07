import express from "express";

const app = express()
const port = process.env["PORT"];

app.get('/', (_req, res) => {
  res.send('Hello World!')
});

app.listen(port);