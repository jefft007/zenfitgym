import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-diet',
    templateUrl: './diet.component.html',
    styleUrls: ['./diet.component.css']
})
export class DietComponent {
    plans = [
        {
            name: 'Muscle Gain Diet',
            calories: '2800 kcal',
            protein: '180g',
            desc: 'High protein and complex carbs to fuel muscle growth.',
            img: 'assets/images/Mask group.png'
        },
        {
            name: 'Weight Loss Plan',
            calories: '1800 kcal',
            protein: '140g',
            desc: 'Calorie deficit with nutrient-dense volumnous foods.',
            img: 'assets/images/image 16.png'
        },
        {
            name: 'Maintenance Diet',
            calories: '2300 kcal',
            protein: '160g',
            desc: 'Balanced macros for sustainable energy and health.',
            img: 'assets/images/Mask group1.png'
        }
    ];

    constructor(private router: Router) { }

    goBack() {
        this.router.navigate(['/']);
    }
}
