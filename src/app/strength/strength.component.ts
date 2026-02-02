import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.css']
})
export class StrengthComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
