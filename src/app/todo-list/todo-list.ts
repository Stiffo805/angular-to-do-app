import { Component, computed, inject, signal } from '@angular/core'
import { TodoListTile } from '../todo-list-tile/todo-list-tile'
import { DateSlider } from '../date-slider/date-slider'
import { TasksListsService } from '../tasks-lists.service'

@Component({
  selector: 'app-todo-list',
  imports: [TodoListTile, DateSlider],
  template: `<div class="w-[35vw]">
    <app-date-slider [(chosenDateModel)]="chosenDateSignal" />
    <app-todo-list-tile [tasksList]="viewedTasksList()" [chosenDate]="chosenDateSignal()" />
  </div>`,
  styleUrl: './todo-list.css'
})
export class TodoList {
  tasksListsService = inject(TasksListsService)

  chosenDateSignal = signal<Date>(new Date())

  viewedTasksList = computed(() => {
    const date = this.chosenDateSignal()
    return this.tasksListsService.getDailyTaskList(date)
  })
}
