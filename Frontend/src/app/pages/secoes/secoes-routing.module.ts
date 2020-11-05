import { SecoesListComponent } from "./list/secoes-list.component";
import { SecoesFormComponent } from "./form/secoes-form.component"
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';

const routes: Routes = [
    {
        path: '',
        component: SecoesListComponent,
    },
    {
        path: 'novo',
        component: SecoesFormComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SecoesRoutingModule {}