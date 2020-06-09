import { ItemPedido } from "./itemPedido";

export class Pedido {
  public Id: number;
  public dataPedido: Date;
  public usuarioId: number;
  public dataPrevisaoEntrega: Date;
  public cep: string;
  public estado: string;
  public cidade: string;
  public enderecoCompleto: string;
  public numeroEndereco: string;
  public formaPagamentoId: number;
  public itensPedido: ItemPedido[];

  constructor() {
    this.dataPedido = new Date();
    this.itensPedido = [];
  }
}
