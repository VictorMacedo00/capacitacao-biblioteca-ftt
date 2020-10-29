export default class Livros {
    id: number;
    titulo: string;
    nome_autor: string;
    isbn: string;
    categorias: {
        id: number;
        categorias: string;
    }
    estantes: {
        id: number;
        estantes: string;
    }
}