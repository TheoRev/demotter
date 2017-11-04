import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
  selector: "show-notification",
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          Notificacion
        </ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content padding>
        <ion-thumbnail item-left>
          <img src="{{notification.img}}">
        </ion-thumbnail>
        <h5>{{notification.action}}</h5>
        <h2>{{notification.nick_name}}</h2>
        <p>{{notification.text}}</p>
    </ion-content>
  `
})
export class ShowNotificationPage {
  notification = {};

  constructor(private navParams: NavParams) {
    this.notification = navParams.get("id");
  }
}
