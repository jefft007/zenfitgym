import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalinfoComponent implements OnInit {
  
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadSavedData();
  }

  loadSavedData(): void {
    const savedPassword = sessionStorage.getItem('userPassword');
    if (savedPassword) {
      this.password = savedPassword;
    }
  }

  onPasswordChange(): void {
    sessionStorage.setItem('userPassword', this.password);
  }

  getPasswordStrength(): number {
    if (!this.password) return 0;
    let strength = 0;
    const checks = [
      this.password.length >= 8,
      /[A-Z]/.test(this.password),
      /[a-z]/.test(this.password),
      /[0-9]/.test(this.password),
      /[^A-Za-z0-9]/.test(this.password)
    ];
    strength = checks.filter(Boolean).length;
    if (strength <= 2) return 0;
    if (strength <= 4) return 1;
    return 2;
  }

  // ✅ ADDED: Password strength as text to use in template (fix for TS2551)
  get passwordStrength(): string {
    switch (this.getPasswordStrength()) {
      case 0: return 'Weak';
      case 1: return 'Medium';
      case 2: return 'Strong';
      default: return 'Very Weak';
    }
  }

  getStrengthBarClass(index: number): string {
    const strength = this.getPasswordStrength();
    const baseClass = 'transition-all duration-300 ';
    if (index <= strength) {
      switch (strength) {
        case 0: return baseClass + 'bg-red-400';
        case 1: return baseClass + 'bg-yellow-400';
        case 2: return baseClass + 'bg-green-400';
      }
    }
    return baseClass + 'bg-gray-200';
  }

  isPasswordValid(): boolean {
    return this.password.length >= 8 &&
           /[A-Z]/.test(this.password) &&
           /[a-z]/.test(this.password) &&
           /[0-9]/.test(this.password) &&
           /[^A-Za-z0-9]/.test(this.password) &&
           !this.hasSequentialNumbers() &&
           !this.isWeakPassword();
  }

  goBack(): void {
    this.router.navigate(['/registration']);
  }

  continue(): void {
    if (this.isPasswordValid()) {
      this.savePasswordData();
      this.router.navigate(['/personal-data']);
    } else {
      this.showValidationErrors();
    }
  }

  savePasswordData(): void {
    sessionStorage.setItem('userPassword', this.password);
    sessionStorage.setItem('passwordCreated', 'true');
    console.log('Password saved successfully');
  }

  showValidationErrors(): void {
    let errors: string[] = [];
    if (this.password.length < 8) errors.push('Password must be at least 8 characters long');
    if (!/[A-Z]/.test(this.password)) errors.push('Password must contain at least one uppercase letter');
    if (!/[a-z]/.test(this.password)) errors.push('Password must contain at least one lowercase letter');
    if (!/[0-9]/.test(this.password)) errors.push('Password must contain at least one number');
    if (!/[^A-Za-z0-9]/.test(this.password)) errors.push('Password must contain at least one special character');
    if (this.hasSequentialNumbers()) errors.push('Password should not contain sequential numbers');
    if (this.isWeakPassword()) errors.push('Password is too common or weak');
    alert('Please fix the following errors:\n' + errors.join('\n'));
  }

  hasUppercase(): boolean {
    return /[A-Z]/.test(this.password);
  }

  hasLowercase(): boolean {
    return /[a-z]/.test(this.password);
  }

  hasNumber(): boolean {
    return /[0-9]/.test(this.password);
  }

  hasSpecialChar(): boolean {
    return /[^A-Za-z0-9]/.test(this.password);
  }

  hasMinLength(): boolean {
    return this.password.length >= 8;
  }

  hasSequentialNumbers(): boolean {
    const sequences = ['123', '234', '345', '456', '567', '678', '789', '890', '012'];
    return sequences.some(seq => this.password.includes(seq));
  }

  isWeakPassword(): boolean {
    const weakPatterns = [
      /^password/i,
      /^123/,
      /^qwerty/i,
      /^admin/i,
      /^user/i,
      /^welcome/i,
      /^login/i
    ];
    return weakPatterns.some(pattern => pattern.test(this.password));
  }

  getPasswordStrengthText(): string {
    return this.passwordStrength;
  }

  clearPassword(): void {
    this.password = '';
    sessionStorage.removeItem('userPassword');
  }

  getRequirementStatus() {
    return {
      length: this.hasMinLength(),
      uppercase: this.hasUppercase(),
      lowercase: this.hasLowercase(),
      number: this.hasNumber(),
      special: this.hasSpecialChar(),
      noSequential: !this.hasSequentialNumbers(),
      notWeak: !this.isWeakPassword()
    };
  }
}
