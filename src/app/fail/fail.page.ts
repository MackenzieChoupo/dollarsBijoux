import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';

@Component({
  selector: 'app-fail',
  templateUrl: './fail.page.html',
  styleUrls: ['./fail.page.scss'],
})
export class FailPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public config: ConfigService,
    public events: Events,
  ) { }

  openHome() {
    this.events.publish("openHomePage");
  }
  openOrders() { this.navCtrl.navigateRoot("/my-orders"); }

  ngOnInit() {
  }

}
