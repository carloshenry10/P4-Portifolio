import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa, ToDo } from '../models/Pessoa';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  private apiUrl = 'http://localhost:5267/api/ToDo'; // Atualize com a URL correta da sua API backend

  constructor(private http: HttpClient) {}

  getAllToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }

  getToDoById(id: number): Observable<ToDo> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ToDo>(url);
  }

  addToDo(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>(this.apiUrl, todo);
  }

  updateToDo(todo: ToDo): Observable<void> {
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<void>(url, todo);
  }

  deleteToDo(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
