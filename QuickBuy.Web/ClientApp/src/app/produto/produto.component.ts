import { Component } from "@angular/core"

@Component({
  selector: "app-produto",
  template: "<html><body>{{ getNome() }}</body></html>"
})

export class ProdutoComponent {
  public nome: string;
  public liberadoParaVenda: boolean;

  public getNome():string {
    //return this.nome;
    return "Samsunga";
  }
}
