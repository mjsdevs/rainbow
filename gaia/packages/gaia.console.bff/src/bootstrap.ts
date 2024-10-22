import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { initTRPC } from '@trpc/server'

export const bootstrap = () => {
  const tRPC = initTRPC.create();

  const router = tRPC.router;
  const procedure = tRPC.procedure;

  const appRouter = router({
    list: procedure.query(async () => {
      const users = [{
        id: '123',
        name: 'Mendes',
        age: 23
      }]

      return users;
    })
  })

  return createHTTPServer({ router: appRouter })
}
