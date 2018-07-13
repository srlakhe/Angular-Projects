import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  toDoListArray: any[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getToDoList().snapshotChanges()
      .subscribe((item) => {
        this.toDoListArray = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x['key'] = element.key;
          this.toDoListArray.push(x);
        });
        this.toDoListArray.sort((a, b) => {
          return a.isChecked - b.isChecked;
        });
      });
  }

  onAdd(itemTitle) {
    this.todoService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  alterCheck(key: string, isChecked: boolean) {
    this.todoService.checkOrUncheckTitle(key, !isChecked);
  }

  onDelete(key) {
    this.todoService.removeTitle(key);
  }
}
