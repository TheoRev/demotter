import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

@Injectable()
export class DBService {
  db: SQLite = null;
  database: SQLiteObject;

  constructor(public http: Http) {
    this.db = new SQLite();
  }

  openDatabase() {
    return this.db
      .create({ name: "data.db", location: "default" })
      .then((dbobj: SQLiteObject) => {
        this.database = dbobj;
        console.log("Creando db...");
        dbobj.executeSql(
          "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,nick_name TEXT,full_name TEXT,email TEXT,password TEXT)",
          []
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  createTable() {
    // let sql =
    //   "CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT,nick_name TEXT,full_name TEXT,email TEXT,password TEXT)";
    // return this.database.executeSql(sql, []);
  }

  getAll() {
    // let sql = "SELECT * FROM users";
    // return this.database.executeSql(sql, {}).then(response => {
    //   let users = [];
    //   for (let index = 0; index < response.rows.length; index++) {
    //     users.push(response.rows.item(index));
    //   }
    //   return Promise.resolve(users);
    // });
  }

  create(user: any) {
    let sql =
      "INSERT INTO users(nick_name, full_name, email, password) VALUES(?,?,?,?)";
    return this.database.transaction(tr => {
      this.database.executeSql(sql, [
        user.nick_name,
        user.full_name,
        user.email,
        user.password
      ]);
    });
  }

  // update(user: any) {
  //   let sql =
  //     "UPDATE users SET nick_name=?, full_name=?, email=?, password=? WHERE id=?";
  //   return this.database.executeSql(sql, [
  //     user.nick_name,
  //     user.full_name,
  //     user.email,
  //     user.password,
  //     user.id
  //   ]);
  // }

  // delete(user: any) {
  //   let sql = "DELETE FROM users WHERE id=?";
  //   return this.database.executeSql(sql, [user.id]);
  // }
}
