import express from "express";
import customerRouter from "./routes";

const app = express()

app.use(express.json())

app.use(customerRouter)

app.listen(3333, () => {
  console.log("Server listening on port 3333")
})