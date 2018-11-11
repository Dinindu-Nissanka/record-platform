import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginComponent} from "./authentication/login/login.component";
import {HomeComponent} from "./home/home.component";
import {FirstpageComponent} from "./firstpage/firstpage.component";
import {SecondpageComponent} from "./secondpage/secondpage.component";
import {CreateElectricityBillComponent} from "./utility-bills/electricity/create/create-electricity-bill.component";
import {AppGuard, LoginGuard} from "./app.guard";
import {AddbillComponent} from "./billing/addbill/addbill.component";
import {CreateInternetBillComponent} from "./utility-bills/internet/create/create-internet-bill.component";
import {CreateWaterBillComponent} from "./utility-bills/water/create/create-water-bill.component";
import {CreateTelephoneBillComponent} from "./utility-bills/telephone/create/create-telephone-bill.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AppGuard]
  },
  {
    path: "first",
    component: FirstpageComponent,
    canActivate: [AppGuard]
  },
  {
    path: "electricity/create",
    component: CreateElectricityBillComponent,
    canActivate: [AppGuard]
  },
  {
    path: "internet/create",
    component: CreateInternetBillComponent,
    canActivate: [AppGuard]
  },
  {
    path: "water/create",
    component: CreateWaterBillComponent,
    canActivate: [AppGuard]
  },
  {
    path: "telephone/create",
    component: CreateTelephoneBillComponent,
    canActivate: [AppGuard]
  },
  {
    path: "bill/create",
    component: AddbillComponent,
    canActivate: [AppGuard],
  },
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
