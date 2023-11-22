import { Component, OnInit } from '@angular/core';
import { CompositionListService } from './composition-list.service';
import { Composicao } from '../model/composicao';

@Component({
  selector: 'app-composition-list',
  templateUrl: './composition-list.component.html',
  styleUrls: ['./composition-list.component.scss']
})
export class CompositionListComponent implements OnInit{
  isHovering = false;
  compositions!: Composicao[] ;
  items = ['Item 1', 'Item 2', 'Item 3'];
  showButtons: boolean[] = [];
  isMouseOverRow: boolean = false;
  mouseOverRowIndex: number | null = null;

  constructor(private compostionService: CompositionListService) {
    // Seu código aqui
  }


  ngOnInit(): void{
    this.compositions = this.compostionService.getListComposition();
  }


  isButtonVisible(index: number): boolean {
    return this.mouseOverRowIndex === index;
  }


  hideButtonsWithDelay(index: number) {
    setTimeout(() => {
      this.showButtons[index] = false;
    }, 5000); // Ajuste o tempo conforme necessário
  }
  editItem(item: string) {
    console.log(`Editando ${item}`);
  }

  addItem(item: Composicao, index: number) {
    console.log(`Adicionando ${item}`);
    // Crie um novo objeto Composicao com valores vazios ou padrão
    let newItem: Composicao = {
      item: index,
      cod: '',
      banco: '',
      descricao: '',
      und: '',
      quant: 0,
      valor_unit: 0,
      valor_bdi: 0,
      total: 0
    };
    // Adicione o novo item logo após o item atual na matriz
    this.compositions.splice(index + 1, 0, newItem);
  }

}
