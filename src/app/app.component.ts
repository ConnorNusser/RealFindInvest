import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RealFindInvest';
  merch: string[] = [];
  constructor() { }

  ngOnInit() {
  }
  onclick(box: string){
    this.merch.push(box);
    console.log(box);
    console.log("hello");
  }

}


