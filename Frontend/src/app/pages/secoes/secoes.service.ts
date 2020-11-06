import { DataSource } from '@angular/cdk/table';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import Secoes from './secoes'

@Injectable({
    providedIn: 'root',
})
export class SecoesService {
    protected url = "http://localhost:8080/secoes";

    constructor(private http: HttpClient) {}

    findAll(): Observable<any[]> {
        return this.http.get<any[]>(this.url);
    }

    findById(id: number): Observable<Secoes> {
        return this.http.get<Secoes>(`${this.url}/${id}`);
    }

    deleteById(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }

    save(data: Secoes): Observable<Secoes> {
        if (data.id) {
            return this.http.put<Secoes>(this.url, data);
        } else {
            return this.http.post<Secoes>(this.url, data);
        }
    }
    
}