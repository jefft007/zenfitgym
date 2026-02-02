import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-confirm',
    templateUrl: './confirm.component.html',
    styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
    userData: any = {};
    isLoading = false;

    constructor(
        private router: Router,
        private authService: AuthService,
        private toastr: ToastrService
    ) { }

    ngOnInit(): void {
        const name = sessionStorage.getItem('userName');
        const email = sessionStorage.getItem('userEmail');
        const savedPassword = sessionStorage.getItem('userPassword');
        const personalData = JSON.parse(sessionStorage.getItem('personalData') || '{}');

        this.userData = {
            name,
            email,
            password: savedPassword,
            ...personalData
        };
    }

    onConfirm() {
        this.isLoading = true;
        this.authService.register(this.userData).subscribe({
            next: (res) => {
                this.toastr.success('Registration successful!', 'Success');
                sessionStorage.clear(); // Clear temp data
                this.router.navigate(['/welcome']); // Or login
            },
            error: (err) => {
                this.toastr.error(err.error.msg || 'Registration failed', 'Error');
                this.isLoading = false;
            }
        });
    }

    goBack() {
        this.router.navigate(['/personal-data']);
    }
}
