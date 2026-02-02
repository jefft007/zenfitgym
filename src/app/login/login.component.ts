import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    credentials = {
        email: '',
        password: ''
    };
    isLoading = false;

    constructor(
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService
    ) { }

    onSubmit() {
        this.isLoading = true;
        this.authService.login(this.credentials).subscribe({
            next: (res) => {
                this.toastr.success('Login successful!', 'Success');
                this.router.navigate(['/']);
            },
            error: (err) => {
                this.toastr.error(err.error.msg || 'Login failed', 'Error');
                this.isLoading = false;
            }
        });
    }
}
