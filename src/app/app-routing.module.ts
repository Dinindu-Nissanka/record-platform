import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {FirstpageComponent} from "./firstpage/firstpage.component";
import {SecondpageComponent} from "./secondpage/secondpage.component";
import {AppGuard, LoginGuard} from "./app.guard";

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
    path: "second",
    component: SecondpageComponent,
    canActivate: [AppGuard]
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
