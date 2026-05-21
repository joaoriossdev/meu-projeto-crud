import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  adapter: {
    provider: "mongodb",
    url: process.env.MONGODB_URL,
  },
});

export default prisma;


