import { UserService } from "../../services/user.service";
import { TabsPage } from "./../tabs/tabs";
import { Component } from "@angular/core";
import { DBService } from "../../services/db.service";

import {
  AlertController,
  LoadingController,
  NavController
} from "ionic-angular";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = {
    email: "",
    password: ""
  };

  constructor(
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private userService: UserService,
    private dbService: DBService
  ) {
    dbService.openDatabase();
    dbService.createTable();
    console.log(dbService.getAll());
  }

  ngOnInit() {
    console.log("Arrancó el init");
  }

  login = (): void => {
    if (this.user.email != "" && this.user.password != "") {
      let usuario;
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      let login: false;

      this.userService
        .loginUser(this.user.email, this.user.password)
        .then(response => {
          loading.dismiss();
          if (response !== undefined) {
            this.navCtrl.push(TabsPage);
          } else {
            let alert = this.alertCtrl.create({
              title: "Login",
              subTitle: "Usuario y/o contraseña invalida.",
              buttons: ["Aceptar"]
            });
            alert.present();
          }
        });
    } else {
      let alert = this.alertCtrl.create({
        title: "Login",
        subTitle: "Complete los campos.",
        buttons: ["Aceptar"]
      });
      alert.present();
    }
  };

  signIn = (): void => {
    alert("signIn");
  };
}
