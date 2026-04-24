import { TestBed } from '@angular/core/testing'

import { TasksListsService } from './tasks-lists.service'

describe('TasksLists', () => {
  let service: TasksListsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TasksListsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
