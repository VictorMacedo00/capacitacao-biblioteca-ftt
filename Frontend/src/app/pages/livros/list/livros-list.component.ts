import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';

interface LivrosElement {
  id: number;
  titulo: string;
  nome_autor: string;
  isbn: string;
  categorias: {
    id: number;
    categorias: string;
  } 
  estantes: {
    id: number;
    estantes: string;
  }
}

const ELEMENT_DATA: LivrosElement[] = []

@Component({
  selector: 'app-livros-list',
  templateUrl: './livros-list.component.html',
  styleUrls: ['./livros-list.component.css']
})

export class LivrosListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'autor', 'isbn', 'categorias', 'estantes', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private livrosService: LivrosService) { }

  ngOnInit(): void {
    this.findAllLivros();
  }

  findAllLivros(): void{
    this.livrosService.findAll().subscribe((response) => this.dataSource = response);
  }

  deleteById(id: number): void{
    this.livrosService.deleteById(id).subscribe(()=> this.findAllLivros());
  }

}
