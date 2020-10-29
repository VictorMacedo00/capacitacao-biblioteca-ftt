import { CategoriasListComponent } from "./list/categorias-list.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: CategoriasListComponent,
    },
    {
        path: 'novo',
        component: CategoriasListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriasRoutingModule {}