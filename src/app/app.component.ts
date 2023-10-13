import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple-Caraousel';
  index: number = 0;
  image: Array<string> = [
    "./assets/pic1.jpg",
    "./assets/pic2.jpg",
    "./assets/pic3.jpg",
    "./assets/pic4.jpeg",
    "./assets/pic5.jpg",
    "./assets/pic6.jpg",
    "./assets/pic7.jpg",
    "./assets/pic8.webp"
  ];

  src=this.image[this.index];

  next = () => {
    this.index = (this.index + 1);
    if (this.index === this.image.length) this.index = 0;
    this.updateSrc();
  };

  prev = () => {
    this.index = (this.index - 1);
    if (this.index === -1) this.index = this.image.length - 1;
    this.updateSrc();

  }
  
  set=(n:number)=>{
    this.index=n;
    this.updateSrc();
  }


  updateSrc=()=>{
    this.src=this.image[this.index];
  };
}
