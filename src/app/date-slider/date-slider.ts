import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-date-slider',
  imports: [NgIcon],
  template: `<div class="mb-2 flex items-center justify-center gap-4 text-2xl">
    <button class="flex cursor-pointer items-center hover:text-blue-200">
      <ng-icon name="heroArrowLeft" />
    </button>
    <p class="text-3xl text-gray-500">2026-04-24</p>
    <button class="flex cursor-pointer items-center hover:text-blue-200">
      <ng-icon name="heroArrowRight" />
    </button>
  </div>`,
  styleUrl: './date-slider.css'
})
export class DateSlider {}
