import express, { NextFunction, Request, Response } from "express";
import { twitRouter } from "./src/twit/twit.controller";
import dotenv from "dotenv";
import path from "path";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();
export const prisma = new PrismaClient();

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

async function main() {
  app.use(express.json());

  app.use("/api/twits", twitRouter);

  app.get("/profile", (req, res) => {
    res.render("profile", {
      user: {
        name: "Alice",
        age: 25,
      },
    });
  });

  app.get("/error", (req, res) => {
    throw new Error("Error route");
  });

  app.all("*", (req, res) => {
    res.status(404).json({ message: "Not found" });
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something broke!" });
  });

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
