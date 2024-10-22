import { procedure, router } from "./trpc";

export const appRouter = router({
  list: procedure.query(async () => {
    const users = [{
      id: '123',
      name: 'Mendes',
      age: 23
    }]

    return users;
  })
})

export type AppRouter = typeof appRouter;