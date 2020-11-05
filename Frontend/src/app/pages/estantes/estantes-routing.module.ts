import { EstantesListComponent } from "./list/estantes-list.component";
import { EstantesFormComponent } from "./form/estantes-form.component"
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: EstantesListComponent,
    },
    {
        path: 'novo',
        component: EstantesFormComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EstantesRoutingModule {}