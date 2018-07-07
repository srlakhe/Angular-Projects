import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayStatus = false;
  countlog = [];

  changeDisplayStatus() {
      this.displayStatus = !this.displayStatus;
     // this.countlog.push(this.countlog.length + 1);
      this.countlog.push(new Date());
  }
  // getColor() {
  //   return this.count >= 5 ? 'blue' : 'white';
  // }
}
