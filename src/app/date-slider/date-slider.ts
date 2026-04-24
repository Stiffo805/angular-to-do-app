import { Component, model } from '@angular/core'
import { NgIcon } from '@ng-icons/core'

@Component({
  selector: 'app-date-slider',
  imports: [NgIcon],
  template: `<div class="mb-2 flex items-center justify-center gap-4 text-2xl">
    <button
      class="flex cursor-pointer items-center hover:text-blue-200"
      (click)="this.slideDate(-1)"
    >
      <ng-icon name="heroArrowLeft" />
    </button>
    <p class="text-3xl text-gray-500">{{ this.chosenDateModel().toLocaleDateString() }}</p>
    <button
      class="flex cursor-pointer items-center hover:text-blue-200"
      (click)="this.slideDate(1)"
    >
      <ng-icon name="heroArrowRight" />
    </button>
  </div>`,
  styleUrl: './date-slider.css'
})
export class DateSlider {
  chosenDateModel = model<Date>(new Date())

  slideDate = (direction: 1 | -1) => {
    this.chosenDateModel.update((cur) => new Date(cur.getTime() + direction * 1000 * 60 * 60 * 24))
  }
}
