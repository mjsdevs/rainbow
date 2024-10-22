import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { appRouter as router } from "./router";
import { bootstrap } from "./bootstrap";

const server = bootstrap();
server.listen(3000);
