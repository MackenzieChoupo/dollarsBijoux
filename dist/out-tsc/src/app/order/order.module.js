import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OrderPage } from './order.page';
const routes = [
    {
        path: '',
        component: OrderPage
    }
];
let OrderPageModule = class OrderPageModule {
};
OrderPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [OrderPage]
    })
], OrderPageModule);
export { OrderPageModule };
//# sourceMappingURL=order.module.js.map