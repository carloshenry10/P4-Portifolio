import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experience } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private apiUrl = 'http://localhost:5267/api/experience'; // Substitua "seu-servidor" pelo URL do seu servidor

  constructor(private http: HttpClient) { }

  getExperience(id: number): Observable<Experience> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Experience>(url);
  }

  addExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(this.apiUrl, experience);
  }

  updateExperience(id: number, experience: Experience): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, experience);
  }

  deleteExperience(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
