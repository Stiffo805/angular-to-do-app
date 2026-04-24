import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './todo-list/todo-list';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheck, heroMinus, heroPlus } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList, NgIcon],
  template: ` <div class="flex min-h-screen items-center justify-center">
    <app-todo-list />
  </div>`,
  styleUrl: './app.css',
  viewProviders: [provideIcons({ heroMinus, heroCheck, heroPlus })]
})
export class App {
  protected readonly title = signal('frontend');
}
