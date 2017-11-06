import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database-deprecated";

@Component({
  selector: "fav",
  templateUrl: "fav.html"
})
export class Fav {
  @Input() key: string;
  @Input() cantidad: number;

  @Output() onFav = new EventEmitter<string>();

  listado: FirebaseListObservable<any>;

  constructor(public database: AngularFireDatabase) {
    this.listado = this.database.list("/twitts");
  }

  test = "";
  icon = "ios-heart-outline";

  alerta() {
    if (this.test == "") {
      //obtener el valor inicial
      let cant: number = parseInt(this.cantidad.toString()) + 1;

      this.listado.update(this.key, {
        fav: cant
      });
      this.test = "primary";
      this.icon = "ios-heart";
    } else {
      //obtener el valor inicial
      let cant: number = parseInt(this.cantidad.toString()) - 1;

      this.listado.update(this.key, {
        fav: cant
      });
      this.test = "";
      this.icon = "ios-heart-outline";
    }
    // this.onFav.emit("gracias por hacer fav");
  }
}
