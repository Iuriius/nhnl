import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nhnl';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.platformId = platformId;
    if (isPlatformBrowser(platformId)) {
      // runs on client / browser
      // console.log("Output is generated only in browser not in server.");
    }
    if (isPlatformServer(platformId)) {
      // runs on server / node
      // console.log("Output is generated only in server not in browser.");
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // runs on client / browser
      // console.log("Output is generated only in browser not in server.");
    }
    if (isPlatformServer(this.platformId)) {
      // runs on server / node
      // console.log("Output is generated only in server not in browser.");
    }
  }
}