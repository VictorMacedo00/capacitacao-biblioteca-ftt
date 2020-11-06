import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import Livros from './livros'

@Injectable({
    providedIn: 'root',
})
export class LivrosService {
    protected url = "http://localhost:8080/livros";

    constructor(private http: HttpClient) {}

    findAll(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }

    findById(id: number): Observable<Livros> {
      return this.http.get<Livros>(`${this.url}/${id}`);
    }

    save(data: Livros): Observable<Livros> {
        if (data.id) {
          return this.http.put<Livros>(this.url, data);
        } else {
          return this.http.post<Livros>(this.url, data);
        }
      }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
      }
}