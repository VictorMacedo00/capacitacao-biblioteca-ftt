import { Component, OnInit } from '@angular/core';
import Categorias  from '../categorias';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CategoriasService } from '../categorias.service';


@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})

export class CategoriasFormComponent implements OnInit {

  constructor(private router: Router, private builder: FormBuilder, private categoriasService: CategoriasService) {}

  categoriasForm: FormGroup

  ngOnInit(): void {
    this.createForm();

    console.log(this.categoriasForm)
  }

  createForm(): void {
    this.categoriasForm = this.builder.group({
      id: null,
      categorias: [null, [Validators.required, Validators.maxLength(120)]]
    })
  }

  onCancel(): void {
    this.router.navigate(['categorias'])
  }

  onSave(value: Categorias): void {
    console.log(value)
    this.categoriasService.save(value).subscribe(response => this.router.navigate(['categorias']))
  }

}
