import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../categorias.service';

interface CategoriasElement {
  id: number;
  categorias: string;
}

const ELEMENT_DATA: CategoriasElement[] = []


@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css']
})

export class CategoriasListComponent implements OnInit {
  displayedColumns: string[] = ['categorias', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.findAllCategorias();
  }

  findAllCategorias(): void {
    this.categoriasService.findAll().subscribe((response) => this.dataSource = response);
  }

  deleteById(id: number): void{
    this.categoriasService.deleteById(id).subscribe(()=> this.findAllCategorias());
  }

}
