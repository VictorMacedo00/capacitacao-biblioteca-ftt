import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasListComponent } from './list/categorias-list.component';
import { CategoriasFormComponent } from './form/categorias-form.component';
import { CategoriasService } from './categorias.service';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [CategoriasListComponent, CategoriasFormComponent],
    imports: [CommonModule, 
        CategoriasRoutingModule, 
        MatButtonModule, 
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [CategoriasService],
})
export class CategoriasModule {}