import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class CategoriasService {
    protected url = "http://localhost:8080/categorias";

    constructor(private http: HttpClient) {}

    findAll(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
      }
}