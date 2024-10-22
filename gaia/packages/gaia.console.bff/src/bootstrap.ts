import * as trpcExpress from "@trpc/server/adapters/express"
import { appRouter } from "./router"
import cors from 'cors';
import express from 'express'

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
