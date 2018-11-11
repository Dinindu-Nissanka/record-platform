import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-addbill",
  templateUrl: "./addbill.component.html",
  styleUrls: ["./addbill.component.scss"]
})
export class AddbillComponent implements OnInit {

  typeString: string [] = ["", "Electricity", "Internet", "Telephone", "Water"];
  selectedType: string;
  isElectricty: boolean;
  isWater: boolean;
  isInternet: boolean;
  isTelephone: boolean;

  constructor() {
  }

  ngOnInit() {
    this.selectedType = "";
    this.clearAll();
  }

  public onTypeSelected(event) {
    this.selectedType = event.target.value;
    this.clearAll();

    switch (this.selectedType) {
      case "Electricity": {
        this.isElectricty = true;
        break;
      }
      case "Water": {
        this.isWater = true;
        break;
      }
      case "Telephone": {
        this.isTelephone = true
        break;
      }
      case "Internet": {
        this.isInternet = true;
        break;
      }
      default: {
        this.clearAll();
        break;
      }
    }
  }

  clearAll() {
    this.isElectricty = false;
    this.isInternet = false;
    this.isWater = false;
    this.isTelephone = false;
  }

}
