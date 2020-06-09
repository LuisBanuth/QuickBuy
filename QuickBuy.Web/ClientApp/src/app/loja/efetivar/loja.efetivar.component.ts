import { Component, OnInit } from "@angular/core"
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras"
import { Produto } from "../../modelo/produto";
import { Pedido } from "../../modelo/pedido";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { ItemPedido } from "../../modelo/itemPedido";
import { PedidoServico } from "../../servicos/pedido/pedido.servico";
import { Router } from "@angular/router";

@Component({
  selector: "loja-efetivar",
  templateUrl: "./loja.efetivar.component.html",
  styleUrls: ["./loja.efetivar.component.css"]
})

export class LojaEfetivarComponent implements OnInit {
  public carrinhoCompras: LojaCarrinhoCompras;
  public produtos: Produto[];
  public total: number;
  ngOnInit(): void {
    this.carrinhoCompras = new LojaCarrinhoCompras;
    this.produtos = this.carrinhoCompras.obterProdutos();

    //verificar se ha produtos no carrinho. Caso nao exista, direciona para a pagina inicial
    if (this.produtos.length <= 0)
      this.router.navigate(['/']);

    this.atualizarTotal();
  }

  constructor(private usuarioServico: UsuarioServico, private pedidoServico: PedidoServico, private router: Router) {

  }

  public atualizarPreco(produto: Produto, quantidade: number) {
    if (!produto.precoOriginal) {
      produto.precoOriginal = produto.preco;
    }
    if (quantidade <= 0) {
      quantidade = 1;
      produto.quantidade = quantidade;
    }
    produto.preco = produto.precoOriginal * quantidade;
    this.carrinhoCompras.atualizar(this.produtos);
    this.atualizarTotal();
  }
  public remover(produto: Produto) {
    this.carrinhoCompras.removerProduto(produto);
    this.produtos = this.carrinhoCompras.obterProdutos();
    this.atualizarTotal();
  }
  public atualizarTotal() {
    this.total = this.produtos.reduce((acc, produto) => acc + produto.preco, 0);
  }

  public efetivarCompra() {
    console.log(this.criarPedido());
    this.pedidoServico.efetivarCompra(this.criarPedido()).subscribe(
      pedidoId => {
        sessionStorage.setItem("pedidoId", pedidoId.toString());
        this.produtos = [];
        this.carrinhoCompras.limparCarrinhoCompras();
        this.router.navigate(['/compra-realizada']);
      },
      e => {
        console.log(e.error);
      }
    );
  }

  public criarPedido(): Pedido {
    let pedido = new Pedido();
    pedido.usuarioId = this.usuarioServico.usuario.id;
    pedido.cep = '12345678';
    pedido.cidade = 'São Paulo';
    pedido.dataPrevisaoEntrega = new Date();
    pedido.enderecoCompleto = "Avenida Paulista";
    pedido.estado = "SP";
    pedido.formaPagamentoId = 1;
    pedido.numeroEndereco = '1000';

    this.produtos = this.carrinhoCompras.obterProdutos();
    for (let p of this.produtos) {
      let itemPedido = new ItemPedido();
      itemPedido.produtoId = p.id;
      if (!p.quantidade)
        p.quantidade = 1;
      itemPedido.quantidade = p.quantidade;

      pedido.itensPedido.push(itemPedido);
    }

    return pedido;
  }
}
