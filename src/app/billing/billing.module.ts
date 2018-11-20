import {NgModule} from "@angular/core";
import {CreateElectricityBillComponent} from "./utility-bills/electricity/create/create-electricity-bill.component";
import {CreateInternetBillComponent} from "./utility-bills/internet/create/create-internet-bill.component";
import {CreateWaterBillComponent} from "./utility-bills/water/create/create-water-bill.component";
import {CreateTelephoneBillComponent} from "./utility-bills/telephone/create/create-telephone-bill.component";
import {AddbillComponent} from "./maincomponets/addbill/addbill.component";
import {ViewbillComponent} from "./maincomponets/viewbill/viewbill.component";
import {CommonModule} from "@angular/common";
import {BillingRoutingModule} from "./billing-routing.module";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared/shared.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ViewElectricityBillComponent} from "./utility-bills/electricity/view/view-electricity-bill.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    SharedModule,
    NgbModule,
    BillingRoutingModule
  ],
  declarations: [
    CreateElectricityBillComponent,
    CreateInternetBillComponent,
    CreateWaterBillComponent,
    CreateTelephoneBillComponent,
    AddbillComponent,
    ViewbillComponent,
    ViewElectricityBillComponent
  ]
})
export class BillingModule {}
