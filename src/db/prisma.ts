import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect() // Ensures Prisma Client is connected
  .then(() => {
    console.log("Prisma Client successfully connected");
  })
  .catch((error) => {
    console.error("Error connecting Prisma Client:", error);
  });

export default prisma;
