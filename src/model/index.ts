import lowDb from "lowdb";
import FileAsync from "lowdb/adapters/FileAsync";
import { config } from "../config";

export default async function init() {
  try {
    const adapter = new FileAsync("db.json");
    const db = await lowDb(adapter);
    db.defaults({
      users: [
        {
          id: config.admin.id,
          login: config.admin.login,
          password: config.admin.password,
          isAdmin: true,
        },
      ],
      tokens: [],
    }).write();

    return db;
  } catch (err) {
    console.log("Database connection error");
    throw err;
  }
}

interface User {
  id: number;
  login: string;
  password: string;
  isAdmin: boolean;
}

export interface dbModel {
  users: User[];
  tokens: string[];
}
