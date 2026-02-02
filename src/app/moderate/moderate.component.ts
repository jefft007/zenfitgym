import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-moderate',
  templateUrl: './moderate.component.html',
  styleUrls: ['./moderate.component.css']
})
export class ModerateComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
