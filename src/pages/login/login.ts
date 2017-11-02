import { TabsPage } from "./../tabs/tabs";
import { Component } from "@angular/core";

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
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    console.log("Arrancó el init");
  }

  login = (): void => {
    if (this.user.email != "" && this.user.password != "") {
      let loading = this.loadingCtrl.create({
        content: "Please wait..."
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.navCtrl.push(TabsPage);
      }, 3000);
    } else {
      let alert = this.alertCtrl.create({
        title: "Login",
        subTitle: "Usuario y/o contraseña invalida.",
        buttons: ["Aceptar"]
      });
      alert.present();
    }
  };

  signIn = (): void => {
    alert("signIn");
  };
}
