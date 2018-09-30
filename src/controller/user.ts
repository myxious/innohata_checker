import { LowdbAsync } from "lowdb";
import { ContextMessageUpdate } from "telegraf";
import { dbModel } from "../model";

const isAdmin = (ctx: ContextMessageUpdate, db: LowdbAsync<dbModel>) =>
  db
    .get("users")
    .some({ id: ctx.from.id, isAdmin: true })
    .value();

export const user = {
  isAdmin,
};
