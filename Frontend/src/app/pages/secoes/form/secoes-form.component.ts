import { Component, OnInit } from '@angular/core';
import Secoes  from '../secoes';
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { SecoesService } from '../secoes.service';

@Component({
  selector: 'app-secoes-form',
  templateUrl: './secoes-form.component.html',
  styleUrls: ['./secoes-form.component.css']
})

export class SecoesFormComponent implements OnInit {

  constructor(private router: Router,
    private builder: FormBuilder, 
    private secoesService: SecoesService,
    private activatedRoute: ActivatedRoute
    ) {}

  secoesForm: FormGroup
  action: string;

  ngOnInit(): void {
    this.createForm();

    this.action = this.activatedRoute.snapshot.url[0].path;
    if (this.action == 'alterar') {
      this.setValue();
    }
  }

  setValue(){
    const id = this.activatedRoute.snapshot.url[1].path
    this.secoesService.findById(Number(id)).subscribe(response => this.secoesForm.patchValue(response));
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
