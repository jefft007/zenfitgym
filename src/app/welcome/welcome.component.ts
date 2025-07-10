import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'] // Remove if not used
})
export class WelcomeComponent {
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  // Navigation Methods
  navigateToMembership(): void {
    this.router.navigate(['/membership']);
  }

  navigateToRegister(): void {
    this.router.navigate(['/registration']);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // List of workout programs
  programs = [
    {
      title: 'Beginner Friendly',
      img: 'assets/images/beg.jpg'
    },
    {
      title: 'Moderate to Advanced',
      img: 'assets/images/moderate.png'
    },
    {
      title: 'Weight Loss',
      img: 'assets/images/weight.jpg'
    },
    {
      title: 'No Equipment',
      img: 'assets/images/no-equipment.jpg'
    },
    {
      title: 'Strength Training',
      img: 'assets/images/strength.jpg'
    }
  ];

  // List of trainer profiles
  trainers = [
    {
      name: 'Aiden Cruz',
      title: 'Strength & Conditioning Coach',
      desc: 'Aiden brings over 5 years of experience helping athletes push their limits...',
      img: 'assets/images/trainer1.jpg'
    },
    {
      name: 'Riley Stone',
      title: 'Functional & HIIT Specialist',
      desc: 'Riley blends functional movements & HIIT to deliver fast, visible results...',
      img: 'assets/images/trainer2.jpg'
    },
    {
      name: 'Ava Bennett',
      title: 'Weight Training & Flexibility Coach',
      desc: 'Ava combines strength training and flexibility with clear, motivating sessions...',
      img: 'assets/images/trainer3.jpg'
    },
    {
      name: 'Leo Morgan',
      title: 'Physique & Fat Loss Expert',
      desc: 'Leo specializes in fat loss programs and lean muscle building techniques...',
      img: 'assets/images/trainer4.jpg'
    }
  ];

  // Optional About Section Cards (if you use them)
  aboutCards = [
    {
      img: 'assets/images/f1.png',
      title: 'Rated 4.9★ by Our Members',
      desc: 'Trusted by a growing community dedicated to strength and balance.'
    },
    {
      img: 'assets/images/f2.png',
      title: '10,000+ Transformations Tracked',
      desc: 'Helping individuals stay consistent and reach goals.'
    },
    {
      img: 'assets/images/f3.png',
      title: 'Expert-Led Training Programs',
      desc: 'Designed and led by certified coaches.'
    }
  ];

  // Footer Links (optional for cleaner template use)
  footerLinks = [
    {
      title: 'Company',
      links: ['About Us', 'Our Services', 'Careers', 'Blog', 'Testimonial', 'Contact Us']
    },
    {
      title: 'Resources',
      links: ['Fitness Tools', 'Workout Videos', 'Nutrition Guides', 'FAQ', 'Success Stories', 'Membership']
    },
    {
      title: 'Programs',
      links: ['Weight Loss', 'Building Muscles', 'Home Workout', 'Gym Plan', 'Our Plans', 'Fitness Group']
    }
  ];
}
