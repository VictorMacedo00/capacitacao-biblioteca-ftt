import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { SecoesRoutingModule } from './secoes-routing.module';
import { SecoesService } from './secoes.service';
import { SecoesListComponent } from './list/secoes-list.component';
import { SecoesFormComponent } from './form/secoes-form.component';
@NgModule({
    declarations: [SecoesListComponent, SecoesFormComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SecoesRoutingModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule, 
        MatTableModule, 
        MatFormFieldModule,
        MatSelectModule
        ],
    providers: [SecoesService],
})
export class SecoesModule {}