import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler,
  DeepLinkConfig
} from "ionic-angular";
import { MyApp } from "./app.component";

import { NotificationPage } from "../pages/notification/notification";
import { ProfilePage } from "../pages/profile/profile";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { LoginPage } from "../pages/login/login";

// refactor por router

var links = [
  { component: LoginPage, name: "Login", segment: "login" },
  { component: TabsPage, name: "Tabs", segment: "tabs" }
];

export const deepLinkConfig: DeepLinkConfig = {
  links
};

@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp, {}, deepLinkConfig)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
