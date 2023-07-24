import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Certifications } from '../models/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class CertificationsService {

  private apiUrl = 'http://localhost:5267/api/certifications'; // Substitua a URL pelo endpoint da sua API

  constructor(private http: HttpClient) { }

  getCertifications(): Observable<Certifications[]> {
    return this.http.get<Certifications[]>(this.apiUrl);
  }

  getCertificationById(id: number): Observable<Certifications> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Certifications>(url);
  }

  addCertification(certification: Certifications): Observable<Certifications> {
    return this.http.post<Certifications>(this.apiUrl, certification);
  }

  updateCertification(id: number, certification: Certifications): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<void>(url, certification);
  }

  deleteCertification(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
