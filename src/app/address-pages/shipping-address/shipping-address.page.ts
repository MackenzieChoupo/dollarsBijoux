import { Component, OnInit } from '@angular/core';


import { ConfigService } from 'src/providers/config/config.service';
import { SharedDataService } from 'src/providers/shared-data/shared-data.service';
import { ModalController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from 'src/providers/loading/loading.service';
import { UserAddressService } from 'src/providers/user-address/user-address.service';
import { LocationDataService } from 'src/providers/location-data/location-data.service';
import { SelectCountryPage } from 'src/app/modals/select-country/select-country.page';
import { SelectZonesPage } from 'src/app/modals/select-zones/select-zones.page';
@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.page.html',
  styleUrls: ['./shipping-address.page.scss'],
})
export class ShippingAddressPage implements OnInit {
  constructor(
    public navCtrl: NavController,
    public config: ConfigService,
    public http: HttpClient,
    public shared: SharedDataService,
    public modalCtrl: ModalController,
    public loading: LoadingService,
    public userAddress: UserAddressService,
    public location: LocationDataService) {

    if (this.shared.customerData.id != null) {
      this.shared.shipping = this.shared.customerData.shipping;
      this.shared.billing = this.shared.customerData.shipping;
      this.shared.billing.email = this.shared.customerData.email;
      //this.shared.shippingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
      //this.shared.shippingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
      this.shared.billingCountryName = this.location.getCountryName(this.shared.customerData.shipping.country);
      this.shared.billingStateName = this.location.getStateName(this.shared.customerData.shipping.country, this.shared.customerData.shipping.state);
      this.shared.billingStateName = this.shared.shippingStateName;
      this.shared.billingCountryName = this.shared.shippingCountryName;
    }
    if (this.shared.shippingCountryName == "" || this.shared.shippingCountryName == null) this.shared.shippingStateName = "";
  }
  disableButton() {

    if (
      this.shared.billing.first_name == ""
      || this.shared.billing.last_name == ""
      || this.shared.billing.city == ""
      || this.shared.billing.email == ""
      || this.shared.shipping.country == ""
      || this.shared.billing.phone == ""
    ) {
      return true;
    }
    else
      return false;
  }
 /* submit() {
    this.navCtrl.navigateForward("billing-address");
  }*/

  submit() {
    this.navCtrl.navigateForward("shipping-method");
   // this.applicationRef.tick();
  }

  async selectCountryPage() {
    let modal = await this.modalCtrl.create({
      component: SelectCountryPage,
      componentProps: {
        page: 'shipping'
      }
    });
    return await modal.present();
  }

  async selectZonePage() {
    let modal = await this.modalCtrl.create({
      component: SelectZonesPage,
      componentProps: {
        page: 'shipping'
      }
    });
    return await modal.present();
  }

  getLocationAddress() {
    this.loading.show();
    this.userAddress.getAddress().then((value: any) => {
      this.shared.shipping.country = value.countryCode;
      this.shared.shipping.city = value.locality;
      //this.shared.shipping.postcode = '';
      this.shared.shipping.state = this.location.getStateCode(value.countryCode, value.administrativeArea);
     // this.shared.shippingStateName = '';
      this.shared.shippingCountryName = value.countryName;
     // this.shared.shipping.address_1 = '';
      this.loading.hide();
    });
  }
  ngOnInit() {
  }


}
