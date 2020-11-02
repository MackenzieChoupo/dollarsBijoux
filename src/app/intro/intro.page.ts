import { Component, OnInit } from '@angular/core';
import { NavController, Events } from '@ionic/angular';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ConfigService } from 'src/providers/config/config.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  public country: string;
  public countryList = [
    { flag: "assets/intro/camer.png", name: "Cameroun", code:"cm" },
    { flag: "assets/intro/gabon.png", name: "Gabon", code:"gb"  },
    { flag: "assets/intro/congokin.png", name: "Congo Kinshasa", code:"ck"  },
    { flag: "assets/intro/congobra.png", name: "Congo Brazaville", code:"cb"  },
    { flag: "assets/intro/ivoire.png", name: "Côte d'ivoire", code:"ci"  }
    
  ];
 
  constructor(
    public navCtrl: NavController,
    public shared: SharedDataService,
    public config: ConfigService,
    public modalCtrl: ModalController,
    public events: Events, ) {
  }
  /*openHomePage() {
    this.events.publish("openHomePage");
    this.config.checkingNewSettingsFromServer();
  }*/
  ionViewDidEnter() {
    this.shared.hideSplashScreen();

  }
  updateCountry(v) {
    console.log('Country ' + v);
    this.navCtrl.navigateForward('home');
  }

  countryHandler(event) {
    // get data throught event emitter
    this.country = event.target.value;
    ConfigService.countryCode = event.target.value;
  }

   goCountry(event) 
   {
    console.log('hello ', event.target.value);
    ConfigService.countryCode = event.target.value;
    console.log(ConfigService.countryCode);
    this.config.getCountryParams(event.target.value);
    this.shared.onStart(); 
    this.navCtrl.navigateForward('home7');
  }

   //close modal
   dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
