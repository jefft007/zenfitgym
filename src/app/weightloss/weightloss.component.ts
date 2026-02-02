import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-weightloss',
  templateUrl: './weightloss.component.html',
  styleUrls: ['./weightloss.component.css']
})
export class WeightlossComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
