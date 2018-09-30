import { LowdbAsync } from "lowdb";
import { ContextMessageUpdate } from "telegraf";
import { dbModel } from "../model";
import { controller } from "../controller";
import { handleError } from "../utils";

export const getRoutes = (db: LowdbAsync<dbModel>) => ({
  start: (ctx: ContextMessageUpdate) => {
    try {
      ctx.reply("Приветственное соообщение");
    } catch (err) {
      handleError(ctx, err);
    }
  },

  adminTest: (ctx: ContextMessageUpdate) => {
    try {
      if (controller.user.isAdmin(ctx, db)) {
        ctx.reply("Ого, админ!");
      } else {
        ctx.reply("Ты не админ!");
      }
    } catch (err) {
      handleError(ctx, err);
    }
  },

  rest: (ctx: ContextMessageUpdate) => {
    try {
      ctx.reply("Непонял");
    } catch (err) {
      handleError(ctx, err);
    }
  },
});
