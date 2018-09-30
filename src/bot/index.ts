import Telegraf from "telegraf";
import { LowdbAsync } from "lowdb";
import { config } from "../config";
import { dbModel } from "../model";
import { getRoutes } from "./routes";

export default function botInit(db: LowdbAsync<dbModel>) {
  try {
    const bot = new Telegraf(config.botToken);
    const routes = getRoutes(db);

    bot.start(routes.start);
    bot.hears("adminTest", routes.adminTest);
    bot.hears(/.*/, routes.rest);

    bot.startPolling();

    console.log("Telegram bot is loaded");
  } catch (err) {
    console.log(`An error occured during Telegram Bot process
      ${err.stack}
    `);
  }
}
