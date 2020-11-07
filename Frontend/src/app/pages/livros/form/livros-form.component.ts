import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Livros  from '../livros';
import { LivrosService } from '../livros.service';
import Categorias from '../../categorias/categorias';
import { CategoriasService } from '../../categorias/categorias.service';
import Estantes from '../../estantes/estantes';
import { EstantesService } from '../../estantes/estantes.service';

@Component({
  selector: 'app-livros-form',
  templateUrl: './livros-form.component.html',
  styleUrls: ['./livros-form.component.css']
})

export class LivrosFormComponent implements OnInit {
  
  constructor(
    private router: Router, 
    private builder: FormBuilder, 
    private livrosService: LivrosService,
    private categoriasService: CategoriasService,
    private estantesService: EstantesService,
    private activatedRoute: ActivatedRoute
    ) {}

  livrosForm: FormGroup;
  categorias: Categorias[] = [];
  estantes: Estantes[] = [];
  action: string;

  ngOnInit(): void {
    this.createForm();
    this.findAllCategorias();
    this.findAllEstantes();

    this.action = this.activatedRoute.snapshot.url[0].path;
    if (this.action == 'alterar') {
      this.setValue();
    }

  }

  setValue(){
    const id = this.activatedRoute.snapshot.url[1].path
    this.livrosService.findById(Number(id)).subscribe(response => this.livrosForm.patchValue(response));
  }

  findAllCategorias() {
    this.categoriasService.findAll().subscribe((response) => (this.categorias = response));
  }

  findAllEstantes() {
    this.estantesService.findAll().subscribe((response) => (this.estantes = response));
  }

  createForm(): void {
    this.livrosForm = this.builder.group({
        id: null,
        titulo: [null, [Validators.required, Validators.maxLength(120)]],
        nome_autor: [null, [Validators.required, Validators.maxLength(120)]],
        isbn: [null, [Validators.required, Validators.maxLength(13), Validators.minLength(13)]],
        categorias: null,
        estantes: null,
      })
  } 

  onCancel(): void {
    this.router.navigate(['livros'])
  }

  onSave(value: Livros): void {
    console.log(value)
    this.livrosService.save(value).subscribe(response => this.router.navigate(['livros']))
  }

}
