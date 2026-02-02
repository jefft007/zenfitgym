import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user: any = {
    name: '',
    age: null,
    gender: 'Male',
    height: null,
    weight: null,
    goal: 'Weight Loss'
  };
  isLoading = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe({
      next: (data) => {
        this.user = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.toastr.error('Failed to load profile');
        this.isLoading = false;
      }
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.authService.updateProfile(this.user).subscribe({
      next: () => {
        this.toastr.success('Profile updated successfully');
        this.router.navigate(['/profile']);
      },
      error: () => {
        this.toastr.error('Update failed');
        this.isLoading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/profile']);
  }
}
