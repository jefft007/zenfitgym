import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  isMobileMenuOpen = false;

  constructor(
    private router: Router,
    public authService: AuthService
  ) { }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

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
  // List of workout programs
  programs = [
    {
      title: 'Beginner Friendly',
      img: 'assets/images/beg.jpg',
      link: '/beginner'
    },
    {
      title: 'Moderate',
      img: 'assets/images/mod.jpg',
      link: '/moderate'
    },
    {
      title: 'Weight Loss',
      img: 'assets/images/weightloss.jpg',
      link: '/weightloss'
    },
    {
      title: 'No Equipment',
      img: 'assets/images/nooequi.jpg',
      link: '/noequipment'
    },
    {
      title: 'Strength Training',
      img: 'assets/images/strength.jpg',
      link: '/strength'
    }
  ];

  // List of trainer profiles
  trainers = [
    {
      name: 'Aiden Cruz',
      title: 'Strength & Conditioning Coach',
      desc: 'Aiden brings over 6 years of experience training athletes and beginners alike. His sessions focus on muscle building, strength endurance, and posture correction — perfect for those looking to sculpt and grow with proper technique.',
      img: 'assets/images/ftrainer.png'
    },
    {
      name: 'Riley Stone',
      title: 'Functional & HIIT Specialist',
      desc: 'Riley blends functional movements with high-intensity routines. With a background in athletics and CrossFit, she’s known for transforming energy into results — great for fat burn, core strength, and mobility.',
      img: 'assets/images/t2.png'
    },
    {
      name: 'Ava Bennett',
      title: 'Weight Training & Flexibility Coach',
      desc: 'Ava combines strength training with mobility work. With 5+ years in fitness and a calm, motivating style, she’s ideal for women seeking tone, flexibility, and confidence in every session.',
      img: 'assets/images/t3.png'
    },
    {
      name: 'Leo Morgan',
      title: 'Physique & Fat Loss Expert',
      desc: 'Leo specializes in fat loss programs and body recomposition. With over 7 years of coaching, his methodical training approach and meal tracking support help clients burn fat and build lean muscle effectively.',
      img: 'assets/images/t4.png'
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
