import { Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { Receita } from './entities/receita.entity';

@Injectable()
export class ReceitasService {
  private receitas: Receita[] = [];

  create({ modoFazer, duracao, serve }: CreateReceitaDto) {
    const currentMaxId = this.receitas[this.receitas.length - 1]?.id || 0;

    const id = currentMaxId + 1;

    const receita = {
      id,
      modoFazer,
      duracao,
      serve,
    };

    this.receitas.push(receita);
    return receita;
  }

  findAll() {
    return this.receitas;
  }

  findOne(id: number) {
    const index = this.receitas.findIndex((receita) => receita.id == id);

    return this.receitas[index];
  }

  update(id: number, updateReceitaDto: UpdateReceitaDto) {
    const receita = this.findOne(id);
    const newReceita = {
      ...receita,
      ...updateReceitaDto,
    };

    const index = this.receitas.findIndex((receita) => receita.id == id);

    this.receitas[index] = newReceita;

    return newReceita;
  }

  remove(id: number) {
    const index = this.receitas.findIndex((receita) => receita.id == id);

    this.receitas.splice(index, 1);

    return `Receita deletada`;
  }
}
