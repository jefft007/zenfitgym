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
            img: 'assets/images/equip_dumbbells.jpg'
        },
        {
            name: 'Barbells',
            desc: 'Essential for heavy compound lifts like squats and deadlifts.',
            img: 'assets/images/equip_barbells.jpg'
        },
        {
            name: 'Treadmill',
            desc: 'Perfect for cardiovascular health and weight loss.',
            img: 'assets/images/equip_treadmill.jpg'
        },
        {
            name: 'Kettlebells',
            desc: 'Great for functional strength and explosive power.',
            img: 'assets/images/equip_kettlebells.jpg'
        },
        {
            name: 'Resistance Bands',
            desc: 'Ideal for stretching, mobility, and light resistance.',
            img: 'assets/images/equip_resistance_bands.jpg'
        },
        {
            name: 'Pull-up Bar',
            desc: 'Excellent for upper body and core strength.',
            img: 'assets/images/equip_pullup_bar.jpg'
        }
    ];

    constructor(private router: Router) { }

    goBack() {
        this.router.navigate(['/']);
    }
}
