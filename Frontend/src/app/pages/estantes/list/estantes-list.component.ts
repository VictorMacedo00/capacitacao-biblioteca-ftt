import { Component, OnInit } from '@angular/core';
import { EstantesService } from '../estantes.service'

interface EstantesElement {
  id: number;
  estantes: string;
  secoes: {
      id: number;
      secoes: string;
    }
}

const ELEMENT_DATA: EstantesElement[] = []


@Component({
  selector: 'app-estantes-list',
  templateUrl: './estantes-list.component.html',
  styleUrls: ['./estantes-list.component.css']
})
export class EstantesListComponent implements OnInit {
  displayedColumns: string[] = ['estantes', 'secoes', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private estantesService: EstantesService) { }

  ngOnInit(): void {
    this.findAllEstantes();
  }

  findAllEstantes(): void{
    this.estantesService.findAll().subscribe((response) => this.dataSource = response);
  }

  deleteById(id: number): void{
    this.estantesService.deleteById(id).subscribe(()=> this.findAllEstantes());
  }

}
