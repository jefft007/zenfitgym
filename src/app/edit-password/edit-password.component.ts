import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent {
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  onSubmit() {
    if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
      this.toastr.error('New passwords do not match');
      return;
    }

    this.isLoading = true;
    this.authService.changePassword({
      currentPassword: this.passwordData.currentPassword,
      newPassword: this.passwordData.newPassword
    }).subscribe({
      next: () => {
        this.toastr.success('Password updated successfully');
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        this.toastr.error(err.error.msg || 'Update failed');
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/profile']);
  }
}
