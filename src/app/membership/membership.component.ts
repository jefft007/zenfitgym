import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

interface ProgramCard {
  title: string;
  description: string;
  iconPath: string;
  isActive?: boolean;
}

interface Package {
  name: string;
  price: number;
  currency: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  // Program cards data
  programCards: ProgramCard[] = [
    {
      title: 'Cardio Strength',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iconPath: 'assets/images/white.png',
      isActive: false
    },
    {
      title: 'Weight Gain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iconPath: 'assets/images/logo2.png',
      isActive: false
    },
    {
      title: 'Fat Loss',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iconPath: 'assets/images/weigloss.png',
      isActive: false
    },
    {
      title: 'Muscle Gain',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      iconPath: 'assets/images/musgain.png',
      isActive: false
    }
  ];

  // Package data
  packages: Package[] = [
    {
      name: 'Basic Package',
      price: 1000,
      currency: '₹',
      features: [
        'Unlimited Gym Access',
        'Cardio Training',
        'Strength Training',
        'Flexibility Training',
        'Personal Trainer'
      ],
      buttonText: 'Purchase'
    },
    {
      name: 'Mid Package',
      price: 1700,
      currency: '₹',
      features: [
        'Unlimited Gym Access',
        'Cardio Training',
        'All Fitness Equipment',
        'Personal Trainer',
        'Nutrition Support',
        '30 Days Free pack',
        'Personal Trainer'
      ],
      isPopular: true,
      buttonText: 'Purchase'
    },
    {
      name: 'Pro Package',
      price: 2000,
      currency: '₹',
      features: [
        'Unlimited Gym Access',
        'Cardio Training',
        'Nutrition Training',
        'All Fitness Equipment',
        'Personal Trainer'
      ],
      buttonText: 'Purchase'
    },
    {
      name: 'Athletic Package',
      price: 2500,
      currency: '₹',
      features: [
        'Unlimited Gym Access',
        'Cardio Training',
        'Nutrition Training',
        'All Fitness Equipment',
        'Personal Trainer',
        'Diet Chart'
      ],
      buttonText: 'Purchase'
    }
  ];

  currentProgramIndex = 0;
  currentPackageIndex = 0;

  onProgramCardClick(index: number) {
    this.programCards.forEach((card, i) => {
      card.isActive = i === index;
    });
  }

  onPrevProgram() {
    this.currentProgramIndex = this.currentProgramIndex > 0 ? this.currentProgramIndex - 1 : this.programCards.length - 1;
  }

  onNextProgram() {
    this.currentProgramIndex = this.currentProgramIndex < this.programCards.length - 1 ? this.currentProgramIndex + 1 : 0;
  }

  onPrevPackage() {
    this.currentPackageIndex = this.currentPackageIndex > 0 ? this.currentPackageIndex - 1 : this.packages.length - 1;
  }

  onNextPackage() {
    this.currentPackageIndex = this.currentPackageIndex < this.packages.length - 1 ? this.currentPackageIndex + 1 : 0;
  }

  onRegisterPackage(packageName: string) {
    if (!this.authService.isLoggedIn()) {
      this.toastr.warning('Please login to purchase a membership', 'Authentication Required');
      this.router.navigate(['/login']);
      return;
    }

    this.authService.updateProfile({ membershipType: packageName }).subscribe({
      next: (res) => {
        this.toastr.success(`Successfully enrolled in ${packageName}!`, 'Success');
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        this.toastr.error('Failed to update membership. Please try again.', 'Error');
      }
    });
  }
}