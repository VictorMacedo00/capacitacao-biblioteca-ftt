import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { EstantesService } from '../estantes.service';
import Estantes  from '../estantes';
import { SecoesService } from '../../secoes/secoes.service';
import Secoes from '../../secoes/secoes';

@Component({
  selector: 'app-estantes-form',
  templateUrl: './estantes-form.component.html',
  styleUrls: ['./estantes-form.component.css']
})

export class EstantesFormComponent implements OnInit {

  constructor(
    private router: Router, 
    private builder: FormBuilder, 
    private estantesService: EstantesService,
    private secoesService: SecoesService,
    private activatedRoute: ActivatedRoute
    ) {}

  estantesForm: FormGroup;
  secoes: Secoes[] = [];
  action: string;

  ngOnInit(): void {
    this.createForm();
    this.findAllSecoes();

    this.action = this.activatedRoute.snapshot.url[0].path;
    if (this.action == 'alterar') {
      this.setValue();
    }
  }

  setValue(){
    const id = this.activatedRoute.snapshot.url[1].path
    this.estantesService.findById(Number(id))
    .subscribe(response => this.estantesForm
    .patchValue(response));
  }

  findAllSecoes() {
    this.secoesService.findAll()
    .subscribe((response) => (this.secoes = response));
  }

  createForm(): void {
    this.estantesForm = this.builder.group({
      id: null,
      estantes: [null, [Validators.required, Validators.maxLength(120)]],
      secoes: null,
    })
  }

  onCancel(): void {
    this.router.navigate(['estantes'])
  }

  onSave(value: Estantes): void {
    console.log(value)
    this.estantesService
    .save(value)
    .subscribe(response => this.router.navigate(['estantes']))
  }


}
