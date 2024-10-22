import { initTRPC } from "@trpc/server";

const tRPC = initTRPC.create();

export const router = tRPC.router;
export const procedure = tRPC.procedure;
export const middleware = tRPC.middleware;