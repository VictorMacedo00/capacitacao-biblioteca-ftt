import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import Categorias from './categorias'

@Injectable({
    providedIn: 'root',
})
export class CategoriasService {
    protected url = "http://localhost:8080/categorias";

    constructor(private http: HttpClient) {}

    findAll(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }

    findById(id: number): Observable<Categorias> {
      return this.http.get<Categorias>(`${this.url}/${id}`);
    }

    save(data: Categorias): Observable<Categorias> {
        if (data.id) {
          return this.http.put<Categorias>(this.url, data);
        } else {
          return this.http.post<Categorias>(this.url, data);
        }
      }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
      }
}