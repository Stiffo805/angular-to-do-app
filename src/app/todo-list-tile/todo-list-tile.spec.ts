import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTile } from './todo-list-tile';

describe('TodoListTile', () => {
  let component: TodoListTile;
  let fixture: ComponentFixture<TodoListTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListTile]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
