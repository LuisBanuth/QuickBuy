import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "loja-app-produto",
  templateUrl: "./loja.produto.component.html",
  styleUrls: ["./loja.produto.component.css"]
})

export class LojaProdutoComponent implements OnInit {
  ngOnInit(): void {
      throw new Error("Method not implemented.");
  }
  constructor(private produtoServico: ProdutoServico) {

  }
}
