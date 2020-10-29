import { SecoesListComponent } from "./list/secoes-list.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';

const routes: Routes = [
    {
        path: '',
        component: SecoesListComponent,
    },
    {
        path: 'novoCadastro',
        component: SecoesListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SecoesRoutingModule {}