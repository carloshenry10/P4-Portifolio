/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ToDoService } from './ToDo.service';

describe('Service: ToDo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoService]
    });
  });

  it('should ...', inject([ToDoService], (service: ToDoService) => {
    expect(service).toBeTruthy();
  }));
});
