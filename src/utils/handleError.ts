import { ContextMessageUpdate } from "telegraf";

export const handleError = (ctx: ContextMessageUpdate, err: Error) => {
  ctx.reply("И что-то пошло не так...");
  console.log(err.stack);
};
