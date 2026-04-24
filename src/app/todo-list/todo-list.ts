import { Component, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TodoListTile } from '../todo-list-tile/todo-list-tile';
import { DateSlider } from '../date-slider/date-slider';

@Component({
  selector: 'app-todo-list',
  imports: [TodoListTile, DateSlider],
  template: `<div class="w-[35vw]"><app-date-slider /><app-todo-list-tile /></div>`,
  styleUrl: './todo-list.css'
})
export class TodoList {}
