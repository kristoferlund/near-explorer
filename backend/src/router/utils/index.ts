import * as trpc from "@trpc/server";
import { Context } from "../../context";
import { router as protocolRouter } from "./protocol";
import { router as deployRouter } from "./deploy";
import { router as searchRouter } from "./search";

export const router = trpc
  .router<Context>()
  .merge(protocolRouter)
  .merge(deployRouter)
  .merge(searchRouter);
