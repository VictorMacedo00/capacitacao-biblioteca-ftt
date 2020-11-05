import { Component, OnInit } from '@angular/core';
import Secoes  from '../secoes';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SecoesService } from '../secoes.service';

@Component({
  selector: 'app-secoes-form',
  templateUrl: './secoes-form.component.html',
  styleUrls: ['./secoes-form.component.css']
})

export class SecoesFormComponent implements OnInit {

  constructor(private router: Router, private builder: FormBuilder, private secoesService: SecoesService) {}

  secoesForm: FormGroup

  ngOnInit(): void {
    this.createForm();

    console.log(this.secoesForm);
  }

  createForm(): void {
    this.secoesForm = this.builder.group({
      id: null,
      secoes: [null, [Validators.required, Validators.maxLength(120)]],
    })
  }

  onCancel(): void {
    this.router.navigate(['secoes'])
  }

  onSave(value: Secoes): void {
    console.log(value)
    this.secoesService.save(value).subscribe(response => this.router.navigate(['secoes']))
  }

}
