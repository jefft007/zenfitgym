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
            img: 'assets/images/Mask group.png',
            meals: [
                { time: 'Breakfast', dish: '4 scrambled eggs, 2 slices whole-wheat toast, 1 banana' },
                { time: 'Lunch', dish: 'Grilled chicken breast (200g), sweet potato, broccoli' },
                { time: 'Snack', dish: 'Whey protein shake, handful of almonds' },
                { time: 'Dinner', dish: 'Salmon (200g), brown rice, asparagus' }
            ]
        },
        {
            name: 'Weight Loss Plan',
            calories: '1800 kcal',
            protein: '140g',
            desc: 'Calorie deficit with nutrient-dense volumnous foods.',
            img: 'assets/images/image 16.png',
            meals: [
                { time: 'Breakfast', dish: 'Oatmeal with berries and a scoop of protein powder' },
                { time: 'Lunch', dish: 'Large mixed green salad with tuna or grilled chicken' },
                { time: 'Snack', dish: 'Greek yogurt with chia seeds' },
                { time: 'Dinner', dish: 'Lean turkey meatballs, zucchini noodles, tomato sauce' }
            ]
        },
        {
            name: 'Maintenance Diet',
            calories: '2300 kcal',
            protein: '160g',
            desc: 'Balanced macros for sustainable energy and health.',
            img: 'assets/images/Mask group1.png',
            meals: [
                { time: 'Breakfast', dish: '3 eggs, spinach, whole-grain wrap' },
                { time: 'Lunch', dish: 'Turkey breast sandwich, side salad with vinaigrette' },
                { time: 'Snack', dish: 'Apple slices with peanut butter' },
                { time: 'Dinner', dish: 'Grilled steak (150g), roasted potatoes, mixed veggies' }
            ]
        }
    ];

    selectedPlan: any = null;

    constructor(private router: Router) { }

    viewPlan(plan: any) {
        this.selectedPlan = this.selectedPlan === plan ? null : plan;
    }

    goBack() {
        this.router.navigate(['/']);
    }
}
