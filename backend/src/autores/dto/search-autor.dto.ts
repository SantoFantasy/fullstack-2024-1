import { Pageable } from "src/dto/pageable.dto";
import { Autor } from "../entities/autor.entity";

export class SearchAutor extends Pageable {
    nome: string;
    nacionalidade: string;

    autor(): Partial<Autor> {
        return {
            nome: this.nome,
            nacionalidade: this.nacionalidade
        }
    }
}