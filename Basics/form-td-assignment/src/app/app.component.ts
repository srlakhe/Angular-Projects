import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') myForm: NgForm;
  defaultSubscription = 'advanced';
  submitted = false;
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  onSubmit() {
    this.submitted = true;
    this.user.email = this.myForm.value.email;
    this.user.subscription = this.myForm.value.subscriptions;
    this.user.password = this.myForm.value.password;
    this.myForm.reset();
  }
}
