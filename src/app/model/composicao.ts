// composicao.model.ts

export class Composicao {
  public item: number;
  public cod: string;
  public banco: string;
  public descricao: string;
  public und: string;
  public quant: number;
  public valor_unit: number;
  public valor_bdi: number;
  public total: number;

  constructor(
    item: number,
    cod: string,
    banco: string,
    descricao: string,
    und: string,
    quant: number,
    valor_unit: number,
    valor_com_bdi: number,
    total: number
  ) {
    this.item = item;
    this.cod = cod;
    this.banco = banco;
    this.descricao = descricao;
    this.und = und;
    this.quant = quant;
    this.valor_unit = valor_unit;
    this.valor_bdi = valor_com_bdi;
    this.total = total;
  }
}
