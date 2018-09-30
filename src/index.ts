import dbInit from "./model";
import botInit from "./bot";

console.log("Server starts...");

dbInit()
  .then(db => {
    console.log("Database is loaded");

    botInit(db);
  })
  .catch(err => {
    console.log(`An error occured:
      ${err.stack}
    `);
  });
