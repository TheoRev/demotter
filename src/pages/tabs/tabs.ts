import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { NotificationPage } from '../notification/notification';
import { HomePage } from '../home/home';

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = NotificationPage;

  constructor() {}
}
