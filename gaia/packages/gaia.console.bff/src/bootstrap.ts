import * as trpcExpress from "@trpc/server/adapters/express"
import cors from 'cors';
import express from 'express'

import { appRouter } from "./router"

export const bootstrap = () => {
  const createContext = ({
    req,
    res,
  }: trpcExpress.CreateExpressContextOptions) => ({});
  type Context = Awaited<ReturnType<typeof createContext>>;

  const app = express();

  app.use(cors());
  app.disable('x-powered-by');

  app.use(trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }))

  return app;
}
