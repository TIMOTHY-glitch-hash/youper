import "dotenv/config";
import cors from "cors";
import express from "express";
import { z } from "zod";

const app = express();
const port = z.coerce.number().int().positive().default(3001).parse(process.env.API_PORT);

app.use(cors());
app.use(express.json());

app.get("/health", (_request, response) => {
  response.json({ status: "ok", service: "youper-api" });
});

app.listen(port, () => {
  console.log(`Youper API listening on http://localhost:${port}`);
});
