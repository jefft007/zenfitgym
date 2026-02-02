import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-personal-data',
    templateUrl: './personal-data.component.html',
    styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {
    personalData = {
        age: null,
        gender: 'Male',
        height: null,
        weight: null,
        goal: 'Weight Loss'
    };

    constructor(private router: Router) { }

    ngOnInit(): void {
        // Load existing data if any
        const savedData = sessionStorage.getItem('personalData');
        if (savedData) {
            this.personalData = JSON.parse(savedData);
        }
    }

    onSubmit() {
        sessionStorage.setItem('personalData', JSON.stringify(this.personalData));
        this.router.navigate(['/confirm']);
    }

    goBack() {
        this.router.navigate(['/personal-info']);
    }
}
