import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  status = ['Stable', 'Critical', 'Finished'];
  myForm: FormGroup;
  forbiddenProjectName = 'Test';
  ngOnInit() {
    this.myForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required], this.forbiddenNames.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'currentStatus': new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.myForm);
    this.myForm.reset();
  }

  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if (control.value === this.forbiddenProjectName) {
  //     return {'forbiddenName': true};
  //   }
  //   return null;
  // }

  forbiddenNames(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      if (control.value === this.forbiddenProjectName) {
        resolve({'projectnamesforbidden' : true});
      } else {
        resolve(null);
      }
    });
    return promise;
  }

}
