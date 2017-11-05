import { Injectable } from '@angular/core';
import {SQLite} from '@ionic-native/sqlite'

@Injectable
export class DBService{
  db:SQLite=null;

  constructor(){
    this.db=new SQLite();
  }

  openDatabase(){
    return this.db.oenDatabase({

    })
  }
}
