import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = 'http://localhost:5000/api/auth';

    constructor(private http: HttpClient) { }

    register(userData: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, userData).pipe(
            tap((res: any) => {
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('user', JSON.stringify(res.user));
                }
            })
        );
    }

    login(credentials: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
            tap((res: any) => {
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    localStorage.setItem('user', JSON.stringify(res.user));
                }
            })
        );
    }

    getProfile(): Observable<any> {
        const headers = new HttpHeaders().set('x-auth-token', localStorage.getItem('token') || '');
        return this.http.get(`${this.apiUrl}/profile`, { headers });
    }

    updateProfile(profileData: any): Observable<any> {
        const headers = new HttpHeaders().set('x-auth-token', localStorage.getItem('token') || '');
        return this.http.put(`${this.apiUrl}/profile`, profileData, { headers });
    }

    changePassword(passwordData: any): Observable<any> {
        const headers = new HttpHeaders().set('x-auth-token', localStorage.getItem('token') || '');
        return this.http.post(`${this.apiUrl}/change-password`, passwordData, { headers });
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
    }

    getUser() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
}
