import { Fav } from "../components/fav/fav";
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
import { ShowNotificationPage } from "../pages/notification/showNotification";
import { SQLite } from "@ionic-native/sqlite";
import { UserService } from "../services/user.service";
import { DBService } from "../services/db.service";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database-deprecated";

export const CONFIG = {
  apiKey: "AIzaSyANc-iws_818mike4oOCDsXWcesI8RyhKM",
  authDomain: "demotter-4c5cb.firebaseapp.com",
  databaseURL: "https://demotter-4c5cb.firebaseio.com",
  projectId: "demotter-4c5cb",
  storageBucket: "demotter-4c5cb.appspot.com",
  messagingSenderId: "55202304983"
};

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
    LoginPage,
    ShowNotificationPage,
    Fav
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, deepLinkConfig),
    HttpModule,
    AngularFireModule.initializeApp(CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    ProfilePage,
    HomePage,
    TabsPage,
    LoginPage,
    ShowNotificationPage,
    Fav
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SQLite,
    UserService,
    DBService
  ]
})
export class AppModule {}
