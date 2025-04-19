import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';  // Import MatIcon for logos

@Component({
  selector: 'app-card',
  imports: [RouterLink, MatCardModule, MatIconModule],  // Add MatIconModule
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';
  @Input() icon: string = '';  // Input for logo/icon
}
