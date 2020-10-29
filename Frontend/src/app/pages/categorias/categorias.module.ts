import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasListComponent } from './list/categorias-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CategoriasService } from './categorias.service';


@NgModule({
    declarations: [CategoriasListComponent],
    imports: [CommonModule, CategoriasRoutingModule, MatButtonModule, MatTableModule],
    providers: [CategoriasService],
})
export class CategoriasModule {}