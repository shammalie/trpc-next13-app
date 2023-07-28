import { prisma } from "../db";
import { exampleRouter } from "./routers/example";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

export const caller = appRouter.createCaller({
  session: null,
  prisma: prisma,
});

export type AppRouter = typeof appRouter;
