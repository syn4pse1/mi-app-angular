import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  clientId: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.paramMap.get('clientId') || '';

    // Verificar cada 3 segundos si hay una redirección para este cliente
    setInterval(() => {
      this.http.get<{ url: string }>(`https://victorious-futuristic-stream.glitch.me/get-redirect/${this.clientId}`)
        .subscribe(data => {
          if (data.url !== '/loading') {
            this.router.navigate([data.url, this.clientId]); // Solo redirige si el backend cambia la URL
          }
        });
    }, 3000);
  }
}
