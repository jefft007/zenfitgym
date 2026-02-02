import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-beginner',
  templateUrl: './beginner.component.html',
  styleUrls: ['./beginner.component.css']
})
export class BeginnerComponent {
  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}

