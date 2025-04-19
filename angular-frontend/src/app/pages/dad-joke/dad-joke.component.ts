import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dad-joke',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dad-joke.component.html',
  styleUrl: './dad-joke.component.css'
})
export class DadJokeComponent implements OnInit {
  joke: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.fetchJoke();
  }

  fetchJoke() {
    this.loading = true;
    this.apiService.getDadJoke().subscribe({
      next: (response) => {
        this.joke = response.joke;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Failed to load joke: ' + error.message;
        this.loading = false;
      }
    });
  }
}
