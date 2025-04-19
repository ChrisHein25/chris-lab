import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppCardComponent } from '../../common/app-card/app-card.component';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [AppCardComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  features = [
    {
      title: 'Word Counter',
      description: 'Quickly count the words in your text and track your writing progress.',
      link: '/word-counter',
      icon: 'notes' // Material icon name
    },
    {
      title: 'Dad Joke Generator',
      description: 'Need a good laugh? Get a random dad joke to brighten your day!',
      link: '/dad-joke',
      icon: 'tag_faces' // Material icon name
    }
  ];
}
