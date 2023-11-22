import { Injectable } from '@angular/core';
import { Composicao } from '../model/composicao';

@Injectable({
  providedIn: 'root',
})
export class CompositionListService {
  constructor() {}

  getListComposition(): Composicao[] {
    return [
      {
        item: 1,
        cod: 'string',
        banco: 'string',
        descricao: 'string',
        und: 'string',
        quant: 2,
        valor_unit: 3,
        valor_bdi: 4,
        total: 5,
      },
      {
        item: 2,
        cod: 'outro código',
        banco: 'outro banco',
        descricao: 'outra descrição',
        und: 'UND',
        quant: 4,
        valor_unit: 6,
        valor_bdi: 8,
        total: 10,
      },
      {
        item: 3,
        cod: 'mais um código',
        banco: 'mais um banco',
        descricao: 'mais uma descrição',
        und: 'UND',
        quant: 6,
        valor_unit: 9,
        valor_bdi: 12,
        total: 15,
      },
      {
        item: 4,
        cod: 'outro código',
        banco: 'outro banco',
        descricao: 'outro descrição',
        und: 'UND',
        quant: 8,
        valor_unit: 12,
        valor_bdi: 16,
        total: 20,
      },
    ];
  }
}
