import { Component } from '@angular/core';
import { DataService } from '../#services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent {
  text = '';

  constructor(
    public dataService: DataService,
    private snackBar: MatSnackBar) { }

  submit(e: Event) {
    e.preventDefault();

    this.createTodo(this.text);
    this.openSnackBar(this.text, 'added');
    this.text = '';
  }

  createTodo(text: string, http = true) {
    return this.dataService.createTodo(text, http);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
