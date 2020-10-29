import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EstantesRoutingModule } from './estantes-routing.module';
import { EstantesListComponent } from './list/estantes-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { EstantesService } from './estantes.service';

@NgModule({
    declarations: [EstantesListComponent],
    imports: [CommonModule, EstantesRoutingModule, MatButtonModule, MatTableModule],
    providers: [EstantesService],
})
export class EstantesModule {}