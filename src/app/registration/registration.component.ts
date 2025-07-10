import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  formData = {
    name: '',
    email: ''
  };

  // Stepper data
  steps = [
    { label: 'Name', icon: 'assets/images/name.png', active: true },
    { label: 'Password', icon: 'assets/images/password.png', active: false },
    { label: 'Personal Data', icon: 'assets/images/person.png', active: false },
    { label: 'Confirm', icon: 'assets/images/confirm.png', active: false }
  ];

  constructor(private router: Router) {}

  onSubmit() {
    // Save form data to sessionStorage
    sessionStorage.setItem('userName', this.formData.name);
    sessionStorage.setItem('userEmail', this.formData.email);

    console.log('Form submitted:', this.formData);

    // Navigate to the next step
    this.router.navigate(['/personal-info']);
  }
}
