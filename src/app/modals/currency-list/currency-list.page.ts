import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/providers/loading/loading.service';
import { ConfigService } from 'src/providers/config/config.service';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.page.html',
  styleUrls: ['./currency-list.page.scss'],
})
export class CurrencyListPage implements OnInit {

  currency: any;
  currencyList = [];
  constructor(

    public loading: LoadingService,
    public config: ConfigService,
    public shared: SharedDataService,
    public modalCtrl: ModalController,
    public http: HttpClient) {
    this.getListOfCurrency();
  }
  getListOfCurrency() {
    this.loading.show();
    this.config.getWithUrl(this.config.getCountryParams(ConfigService.countryCode)[0] + "/api/appsettings/get_all_currencies/?insecure=cool").then((data: any) => {
      this.loading.hide();
      this.currencyList = data.data;
      this.currencyList.forEach(val => {

        if (val.symbol == localStorage.currency) {
          console.log(val.symbol);
          this.currency = val;
        }
      });
    });
  }
  updateCurrency(c) {
    if (localStorage.currency != c.code) {
      this.loading.autoHide(1000);
      localStorage.currency = c.symbol;
      localStorage.currencyCode = c.name;
      localStorage.currencyPos = c.position;
      localStorage.decimals = c.decimals;
      this.shared.emptyCart();
      this.shared.emptyRecentViewed();

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
  //close modal
  dismiss() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
