import { Component, OnInit } from '@angular/core';
import { SecoesService } from '../secoes.service';

interface SecoesElement {
  id: number;
  secoes: string;
}

const ELEMENT_DATA: SecoesElement[] = []


@Component({
  selector: 'app-secoes-list',
  templateUrl: './secoes-list.component.html',
  styleUrls: ['./secoes-list.component.css']
})

export class SecoesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'secoes', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(private secoesService: SecoesService) { }

  ngOnInit(): void {
    this.findAllSecoes();
  }

  findAllSecoes(): void{
    this.secoesService.findAll().subscribe((response) => this.dataSource = response);
  }

  deleteById(id: number): void{
    this.secoesService.deleteById(id).subscribe(()=> console.log("Deletou"));
  }

}
