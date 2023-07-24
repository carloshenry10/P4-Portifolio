import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Works } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class WorksService {
  private apiUrl = 'api/works'; // Verifique o endpoint correto para sua API

  constructor(private http: HttpClient) { }

  getWorks(): Observable<Works[]> {
    return this.http.get<Works[]>(this.apiUrl);
  }

  getWork(id: number): Observable<Works> {
    return this.http.get<Works>(`${this.apiUrl}/${id}`);
  }

  addWork(work: Works): Observable<Works> {
    return this.http.post<Works>(this.apiUrl, work);
  }

  updateWork(id: number, work: Works): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, work);
  }

  deleteWork(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
