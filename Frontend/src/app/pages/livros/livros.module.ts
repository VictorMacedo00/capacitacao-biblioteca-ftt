import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosListComponent } from './list/livros-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { LivrosService } from './livros.service';

@NgModule({
    declarations: [LivrosListComponent],
    imports: [CommonModule, LivrosRoutingModule, MatButtonModule, MatTableModule],
    providers: [LivrosService],
})
export class LivrosModule {}