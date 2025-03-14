import { ICreateTwit } from "@/twit/twit.types";
import { PrismaClient, Twit } from "@prisma/client";

export class TwitService {
  prisma = new PrismaClient();
  createTwit(twit: ICreateTwit): Promise<Twit> {
    return this.prisma.twit.create({
      data: twit,
    });
  }

  async getTwits(): Promise<Twit[]> {
    return this.prisma.twit.findMany();
  }
}
