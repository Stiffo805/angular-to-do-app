import { effect, Injectable, signal } from '@angular/core'
import { TasksList } from './utils/types'

@Injectable({ providedIn: 'root' })
export class TasksListsService {
  protected tasksLists = signal<TasksList[]>(
    (JSON.parse(localStorage.getItem('tasksLists') ?? '[]') as TasksList[]).map((taskList) => ({
      ...taskList,
      date: new Date(taskList.date)
    }))
  )

  constructor() {
    effect(() => {
      localStorage.setItem('tasksLists', JSON.stringify(this.tasksLists()))
    })
  }

  getDailyTaskList(date: Date) {
    return this.tasksLists().find((list) => list.date.toDateString() === date.toDateString())
  }

  createTaskList = (date: Date) => {
    this.tasksLists.update((items) => [
      ...items,
      {
        date,
        tasks: []
      }
    ])
  }

  toggleCompleteTask = (listDate: Date, taskId: number) => {
    this.tasksLists.update((lists) =>
      lists.map((list) => {
        if (list.date.toDateString() !== listDate.toDateString()) return list

        return {
          ...list,
          tasks: list.tasks.map((task) =>
            task.id === taskId ? { ...task, isDone: !task.isDone } : task
          )
        }
      })
    )
  }

  deleteTask = (listDate: Date, taskId: number) => {
    this.tasksLists.update((lists) =>
      lists.map((list) => {
        if (list.date.toDateString() !== listDate.toDateString()) return list

        return {
          ...list,
          tasks: list.tasks.filter((t) => t.id !== taskId)
        }
      })
    )
  }

  addTask = (listDate: Date, title: string) => {
    this.tasksLists.update((lists) =>
      lists.map((list) => {
        console.log(list.date.toDateString(), listDate.toDateString())
        if (list.date.toDateString() !== listDate.toDateString()) return list

        const newTask = { id: Date.now(), title, isDone: false }
        return { ...list, tasks: [...list.tasks, newTask] }
      })
    )
  }
}
