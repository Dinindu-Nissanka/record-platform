import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../models/data-models";
import {AppCommonService} from "../services/app-common.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  private selectedMenu: MenuItem;
  private isExpand = false;

  private menuSource: MenuItem[] = [
    { id: 1, route: '/home', name: 'Home', position: 'parent', iconName: 'home', pattern: '*' },
    { id: 2, route: '/first', name: 'First', position: 'parent', iconName: 'assignment', pattern: '*' },
    { id: 3, route: '/second', name: 'Second', position: 'parent', iconName: 'apps',pattern: '*' }
  ];


  constructor(private _appCommonService: AppCommonService,
              private _router: Router) {
  }

  ngOnInit() {

    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.selectedMenu = this.menuSource.filter((menu) => menu.route == event.url)[0];
      }
    });

    this.selectedMenu = this.menuSource[0];

    this._appCommonService.menuToggleStream.subscribe((flag) => this.isExpand = flag);
  }

  onClick(menu: any) {
    this.selectedMenu = menu;
    this._router.navigate([menu.route]);
  }

}
