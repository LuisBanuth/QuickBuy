import { Component, OnInit } from "@angular/core"
import { Produto } from "../../modelo/produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Router } from "@angular/router";

@Component({
  selector: "pesquisa-produto",
  templateUrl: "./pesquisa.produto.component.html",
  styleUrls: ["./pesquisa.produto.component.css"]
})

export class PesquisaProduto implements OnInit {

  public produtos: Produto[];
  ngOnInit(): void {

  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.obterTodoProdutos().subscribe(
      produto => {
        this.produtos = produto;
      },
      e => {

      }
    )
  }

  public adicionarProduto() {
    this.router.navigate(['/produto']);
    sessionStorage.setItem("produtoSession", "");
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente deletar o produto?");
    if (retorno == true) {
      this.produtoServico.deletar(produto).subscribe(
        produtos => {
          this.produtos = produtos;
        },
        e => {
          console.log(e.errors);
        }
      )
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem('produtoSession', JSON.stringify(produto));
    this.router.navigate(['/produto']);

  }
}
