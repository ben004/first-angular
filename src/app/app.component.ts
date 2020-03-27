import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular';
  a= [];
  value: number;

  constructor(
  ) { }

  enqueue(n : number) : void {
    let i: number = this.a.length  
    this.a[i] = (n);
    console.log(this.a);
  }
  dequeue() : void {
    this.a.shift();
    console.log(this.a);
  }
  show_queue(): void{
    this.a.length>0 ? console.log(this.a) : console.log("empty queue")
  }
}
