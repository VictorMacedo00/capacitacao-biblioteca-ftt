import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import Estantes from './estantes'

@Injectable({
    providedIn: 'root',
})
export class EstantesService {
    protected url = "http://localhost:8080/estantes";

    constructor(private http: HttpClient) {}

    findAll(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }

    findById(id: number): Observable<Estantes> {
      return this.http.get<Estantes>(`${this.url}/${id}`);
    }

    save(data: Estantes): Observable<Estantes> {
        if (data.id) {
          return this.http.put<Estantes>(this.url, data);
        } else {
          return this.http.post<Estantes>(this.url, data);
        }
      }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
      }
}