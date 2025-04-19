import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule here
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavOpen = false;
  isMobile = false;

  ngOnInit() {
    this.checkMobileView(); // Check screen size on component load
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {  // Explicitly typing event as an Event
    this.checkMobileView(); // Recheck on window resize
  }

  checkMobileView() {
    this.isMobile = window.innerWidth <= 768; // Mobile screen size check
  }

  toggleDropdown() {
    this.isNavOpen = !this.isNavOpen;
  }
}
