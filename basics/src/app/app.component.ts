import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>Hello World</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [''],
})
export class AppComponent {
  name = 'john';
  imgUrl = 'https://picsum.photos/id/237/500/500';
  images = [
    'https://picsum.photos/id/238/500/500',
    'https://picsum.photos/id/239/500/500',
    'https://picsum.photos/id/240/500/500',
  ];
  currentDate = new Date();
  cost = 2000;
  temp = 35.5;
  pizza = {
    toppings: ['panner', 'onion'],
    size: 'large',
  };
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }

  logImage(e: string) {
    console.log(e);
  }
}
