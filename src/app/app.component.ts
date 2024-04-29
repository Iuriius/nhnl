import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nhnl';
  i = 0;
  bool = false;
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

  buttonClick() {
    this.i++;
    console.log("clicked");
  }

  toggle() {
    this.bool = !this.bool;
    console.log("clicked");
  }
}