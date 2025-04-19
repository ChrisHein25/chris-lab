import { Routes } from '@angular/router';
import { WordCounterComponent } from './pages/word-counter/word-counter.component';
import { DadJokeComponent } from './pages/dad-joke/dad-joke.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

// Export the routes array
export const routes: Routes = [
  { path: 'word-counter', component: WordCounterComponent },
  { path: 'dad-joke', component: DadJokeComponent },
  { path: '', component: HomepageComponent},
];
