import { Component, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-todo-list',
  imports: [NgIcon],
  template: `<div class="min-h-100 w-[35vw] bg-blue-400 p-2">
    <div class="flex h-16 items-center p-2">
      <input
        placeholder="Nazwa zadania..."
        class="block h-full w-full border-2 border-b-gray-900 bg-gray-300 p-1"
      />
      <div
        class="h-full cursor-pointer content-center rounded-tr-2xl rounded-br-2xl bg-indigo-500 px-2 hover:bg-indigo-600"
      >
        <ng-icon name="heroPlus" />
      </div>
    </div>
    <ul>
      @for (task of initialTasks(); track task) {
        <li
          class="m-2 flex max-w-[50vw] rounded-tr-2xl rounded-br-2xl text-3xl font-bold"
          [class.bg-emerald-100]="!task.isDone"
          [class.bg-emerald-300]="task.isDone"
          [class.text-gray-500]="task.isDone"
          [class.opacity-90]="task.isDone"
        >
          <div class="p-2 px-4">{{ task.title }}</div>
          <div
            class="ml-auto flex cursor-pointer items-center border-r-2 bg-emerald-300 px-4 hover:bg-emerald-400"
            (click)="toggleCompleteTask(task.id)"
          >
            <ng-icon name="heroCheck" />
          </div>
          <div
            class="flex cursor-pointer items-center rounded-tr-2xl rounded-br-2xl bg-amber-700 px-4 hover:bg-amber-800"
            (click)="deleteTask(task.id)"
          >
            <ng-icon name="heroMinus" />
          </div>
        </li>
      } @empty {
        <li class="p-2 text-3xl italic">Nie stworzono jeszcze zadań...</li>
      }
    </ul>
  </div>`,
  styleUrl: './todo-list.css'
})
export class TodoList {
  toggleCompleteTask = (taskId: number) => {
    this.initialTasks.update((items) =>
      items.map((task) =>
        task.id === taskId
          ? {
              ...task,
              isDone: !task.isDone
            }
          : task
      )
    );
  };
  deleteTask = (taskId: number) => {
    this.initialTasks.update((items) => items.filter((task) => task.id !== taskId));
  };
  initialTasks = signal([
    {
      id: 1,
      title: 'Wynieść papiery i plastiki',
      isDone: false
    },
    {
      id: 2,
      title: 'Iść do sklepu',
      isDone: true
    },
    {
      id: 3,
      title: 'Zrobić obiad',
      isDone: false
    },
    {
      id: 4,
      title: 'Poćwiczyć',
      isDone: true
    }
  ]);
}
