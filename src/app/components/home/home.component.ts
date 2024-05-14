import { Component } from '@angular/core';
import { HeroswiperComponent } from '../heroswiper/heroswiper.component';
import { log } from 'node:console';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroswiperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  logs() {
    console.log("clicked");
  }
  ddd = false
}
