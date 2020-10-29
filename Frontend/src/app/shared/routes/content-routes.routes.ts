import { Routes } from '@angular/router';

export const CONTENT_ROUTES: Routes = [
    {
        path: 'default',
        loadChildren: () =>
            import('../../pages/default/default.module').then(
                (m) => m.DefaultModule
            ),
    },
    {
        path: 'livros',
        loadChildren: () =>
            import('../../pages/livros/livros.module').then(
                (m) => m.LivrosModule
            ),
    },
    {
        path: 'categorias',
        loadChildren: () =>
            import('../../pages/categorias/categorias.module').then(
                (m) => m.CategoriasModule
            ),
    },
    {
        path: 'estantes',
        loadChildren: () =>
            import('../../pages/estantes/estantes.module').then(
                (m) => m.EstantesModule
            ),
    },
    {
        path: 'secoes',
        loadChildren: () =>
            import('../../pages/secoes/secoes.module').then(
                (m) => m.SecoesModule
            ),
    }
];