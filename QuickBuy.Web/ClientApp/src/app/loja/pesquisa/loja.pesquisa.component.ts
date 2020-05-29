import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Produto } from "../../modelo/produto";

@Component({
  selector: "app-loja",
  templateUrl: "./loja.pesquisa.component.html",
  styleUrls: ["./loja.pesquisa.component.css"]
})

export class LojaPesquisaComponent implements OnInit {

  public produtos: Produto[];

  constructor(private produtoServico: ProdutoServico) {
    this.produtoServico.obterTodoProdutos().subscribe(
      produtos => {
        this.produtos = produtos;
      },
      e => {
        console.log(e.error);
      }
    )
  }
  ngOnInit(): void {

  }

  public abrirProduto(produto: Produto) {

  }

}
