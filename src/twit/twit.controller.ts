import { Response, Request, Router } from "express";
import { TwitService } from "@/twit/twit.service";
import { authMiddleware } from "@/auth.middleware";
import { createTwitDto } from "./twit.dto";
import { log } from "console";

const router = Router();

const twitService = new TwitService();

router.post("/", authMiddleware, async (req: Request, res: Response) => {
  const validation = createTwitDto.safeParse(req.body);
  if (!validation.success) {
    res.status(400).json({ message: validation.error.errors });
    return;
  }

  if (!req.body.content) {
    res.status(400).json({ message: "Text is required" });
    return;
  }
  const twit = await twitService.createTwit(req.body);
  res.status(201).json(twit);
});

router.get("/", async (req: Request, res: Response) => {
  const twits = await twitService.getTwits();
  res.json(twits);
});

export const twitRouter = router;
