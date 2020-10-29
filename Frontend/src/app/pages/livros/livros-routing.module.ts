import { LivrosListComponent } from "./list/livros-list.component";
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: LivrosListComponent,
    },
    {
        path: 'novo',
        component: LivrosListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LivrosRoutingModule {}