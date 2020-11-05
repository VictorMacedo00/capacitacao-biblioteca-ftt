import Categorias from '../categorias/categorias';
import Estantes from '../estantes/estantes';

export default class Livros {
    id: number;
    titulo: string;
    nome_autor: string;
    isbn: string;
    categorias: Categorias;
    estantes: Estantes;
}