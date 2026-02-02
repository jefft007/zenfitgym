import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-noequipment',
  templateUrl: './noequipment.component.html',
  styleUrls: ['./noequipment.component.css']
})
export class NoequipmentComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
