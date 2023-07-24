import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { University } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiUrl = 'http://localhost:5267/api/University'; // Substitua 'URL_DO_BACKEND' pela URL da sua API

  constructor(private http: HttpClient) {}

  // Método para obter todas as universidades
  getAllUniversities(): Observable<University[]> {
    return this.http.get<University[]>(this.apiUrl);
  }

  // Método para obter uma universidade por ID
  getUniversityById(id: number): Observable<University> {
    return this.http.get<University>(`${this.apiUrl}/${id}`);
  }

  // Método para adicionar uma nova universidade
  addUniversity(university: University): Observable<University> {
    return this.http.post<University>(this.apiUrl, university);
  }

  // Método para atualizar uma universidade existente
  updateUniversity(university: University): Observable<University> {
    return this.http.put<University>((`${this.apiUrl}/${university.id}`), university);
  }

  getUniversitiesByName(query: string): Observable<University[]> {
    const params = new HttpParams().set('nome', query); // Ajuste para 'nome' como esperado pelo backend
    return this.http.get<University[]>(`${this.apiUrl}/nome/${query}`, { params });
  }

  // Método para excluir uma universidade
  deleteUniversity(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}
