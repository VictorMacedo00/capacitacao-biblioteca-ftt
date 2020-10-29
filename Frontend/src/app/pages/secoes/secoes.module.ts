import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

import { SecoesRoutingModule } from './secoes-routing.module';
import { SecoesService } from './secoes.service';
import { SecoesListComponent } from './list/secoes-list.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
    declarations: [SecoesListComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SecoesRoutingModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule, 
        MatTableModule, 
        MatFormFieldModule
        ],
    providers: [SecoesService],
})
export class SecoesModule {}