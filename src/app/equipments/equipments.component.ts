import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-equipments',
    templateUrl: './equipments.component.html',
    styleUrls: ['./equipments.component.css']
})
export class EquipmentsComponent {
    equipments = [
        {
            name: 'Dumbbells',
            desc: 'Versatile for strength training and muscle toning.',
            img: 'assets/images/Mask group3.png'
        },
        {
            name: 'Barbells',
            desc: 'Essential for heavy compound lifts like squats and deadlifts.',
            img: 'assets/images/Mask group4.png'
        },
        {
            name: 'Treadmill',
            desc: 'Perfect for cardiovascular health and weight loss.',
            img: 'assets/images/Mask group5.png'
        },
        {
            name: 'Kettlebells',
            desc: 'Great for functional strength and explosive power.',
            img: 'assets/images/Mask group6.png'
        },
        {
            name: 'Resistance Bands',
            desc: 'Ideal for stretching, mobility, and light resistance.',
            img: 'assets/images/Mask group7.png'
        },
        {
            name: 'Pull-up Bar',
            desc: 'Excellent for upper body and core strength.',
            img: 'assets/images/Mask group8.png'
        }
    ];

    constructor(private router: Router) { }

    goBack() {
        this.router.navigate(['/']);
    }
}
