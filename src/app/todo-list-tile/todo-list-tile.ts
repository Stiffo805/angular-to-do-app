import { Component, inject, input, signal, WritableSignal } from '@angular/core'
import { NgIcon } from '@ng-icons/core'
import { Task, TasksList } from '../utils/types'
import { TasksListsService } from '../tasks-lists.service'

@Component({
  selector: 'app-todo-list-tile',
  imports: [NgIcon],
  template: `<div class="min-h-100 bg-blue-200 p-2">
    <div class="flex h-16 items-center p-2">
      <input
        placeholder="Nazwa zadania..."
        class="block h-full w-full border-2 border-b-gray-900 bg-gray-300 p-1"
        #taskNameInput
      />
      <button
        class="flex h-full cursor-pointer items-center rounded-tr-2xl rounded-br-2xl bg-indigo-500 px-5 hover:bg-indigo-600"
        (click)="addTask(taskNameInput)"
      >
        <ng-icon name="heroPlus" size="24" />
      </button>
    </div>
    <ul>
      @if (!tasksList()) {
        <li class="flex justify-center p-2 text-3xl">
          <button
            class="cursor-pointer rounded-2xl bg-emerald-400 p-2 px-4 hover:bg-emerald-500"
            (click)="createTaskList()"
          >
            Utwórz listę
          </button>
        </li>
      } @else {
        @for (task of tasksList()?.tasks; track task) {
          <li
            class="m-2 flex max-w-[50vw] rounded-tr-2xl rounded-br-2xl text-3xl font-bold"
            [class.bg-emerald-100]="!task.isDone"
            [class.bg-emerald-300]="task.isDone"
            [class.text-gray-500]="task.isDone"
            [class.opacity-90]="task.isDone"
          >
            <div class="p-2 px-4">{{ task.title }}</div>
            <button
              class="ml-auto flex cursor-pointer items-center border-r-2 bg-emerald-300 px-4 hover:bg-emerald-400"
              (click)="toggleCompleteTask(task.id)"
            >
              <ng-icon name="heroCheck" />
            </button>
            <button
              class="flex cursor-pointer items-center rounded-tr-2xl rounded-br-2xl bg-amber-700 px-4 hover:bg-amber-800"
              (click)="deleteTask(task.id)"
            >
              <ng-icon name="heroMinus" />
            </button>
          </li>
        } @empty {
          <li class="p-2 text-3xl italic">Nie stworzono jeszcze zadań...</li>
        }
      }
    </ul>
  </div>`,
  styleUrl: './todo-list-tile.css'
})
export class TodoListTile {
  tasksListsService = inject(TasksListsService)

  tasksList = input<TasksList>()

  chosenDate = input.required<Date>()

  createTaskList = () => {
    this.tasksListsService.createTaskList(this.chosenDate())
  }
  toggleCompleteTask = (taskId: number) => {
    const listDate = this.tasksList()?.date
    if (listDate) this.tasksListsService.toggleCompleteTask(listDate, taskId)
  }
  deleteTask = (taskId: number) => {
    const listDate = this.tasksList()?.date
    if (listDate) this.tasksListsService.deleteTask(listDate, taskId)
  }
  addTask = (inputElement: HTMLInputElement) => {
    if (inputElement.value.trim() === '') return
    const listDate = this.tasksList()?.date

    if (listDate) this.tasksListsService.addTask(listDate, inputElement.value)

    inputElement.value = ''
  }
}
