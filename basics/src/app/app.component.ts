import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>Hello World</h1>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [''],
})
export class AppComponent {
  name = 'John';
  imgUrl = 'https://picsum.photos/id/237/500/500';

  getName() {
    return this.name;
  }

  changeImage(e: KeyboardEvent) {
    this.imgUrl = (e.target as HTMLInputElement).value;
  }
}
