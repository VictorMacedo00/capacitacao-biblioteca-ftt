import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { LivrosService } from './livros.service';
import { LivrosFormComponent } from './form/livros-form.component';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosListComponent } from './list/livros-list.component';

@NgModule({
    declarations: [LivrosListComponent, LivrosFormComponent],
    imports: [
        CommonModule,
        LivrosRoutingModule, 
        MatButtonModule, 
        MatTableModule, 
        MatCardModule, 
        MatFormFieldModule, 
        MatInputModule,
        MatSelectModule    
    ],
    providers: [LivrosService],
})
export class LivrosModule {}