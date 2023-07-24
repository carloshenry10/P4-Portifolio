import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schooling } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class SchoolingService {
  private apiUrl = 'http://localhost:5267/api/schooling'; // Substitua pelo seu endpoint da API

  constructor(private http: HttpClient) { }

  getSchoolings(): Observable<Schooling[]> {
    return this.http.get<Schooling[]>(this.apiUrl);
  }

  getSchooling(id: number): Observable<Schooling> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Schooling>(url);
  }

  addSchooling(schooling: Schooling): Observable<Schooling> {
    return this.http.post<Schooling>(this.apiUrl, schooling);
  }

  updateSchooling(id: number, schooling: Schooling): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, schooling);
  }

  deleteSchooling(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
