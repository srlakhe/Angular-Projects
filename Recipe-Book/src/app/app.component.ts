import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyABj_yTVl-U87LbK6KxK0hacgSo7X3i4Yw",
      authDomain: "ng-recipe-book-37745.firebaseapp.com"
    });
  }
}
