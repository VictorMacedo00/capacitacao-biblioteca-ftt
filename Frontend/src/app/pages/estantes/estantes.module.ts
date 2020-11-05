import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstantesRoutingModule } from './estantes-routing.module';
import { EstantesListComponent } from './list/estantes-list.component';
import { EstantesFormComponent } from './form/estantes-form.component';
import { EstantesService } from './estantes.service';
import { SecoesService } from '../secoes/secoes.service'

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [EstantesListComponent, EstantesFormComponent],
    imports: [
        CommonModule,
        EstantesRoutingModule, 
        MatButtonModule, 
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [EstantesService, SecoesService],
})
export class EstantesModule {}