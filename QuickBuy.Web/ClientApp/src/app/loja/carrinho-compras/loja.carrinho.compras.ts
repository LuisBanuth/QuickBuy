import { Produto } from "../../modelo/produto";

export class LojaCarrinhoCompras {
  
  public produtos: Produto[] = [];
  public adicionar(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if (!produtoLocalStorage) {
      this.produtos.push(produto);
    } else {
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos.push(produto);
    }
    localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
  }

  public obterProdutos(): Produto[] {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if (produtoLocalStorage)
      return JSON.parse(produtoLocalStorage);
    return this.produtos;
  }

  public removerProduto(produto: Produto) {
    this.produtos = JSON.parse(localStorage.getItem("produtoLocalStorage"));
    this.produtos = this.produtos.filter(p => p.id != produto.id);
    localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
  }

  public atualizar(produtos: Produto[]) {
    localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos));
  }

  public temItensCarrinho(): boolean {
    var itens = this.obterProdutos();
    return (itens.length > 0);
  }

  public limparCarrinhoCompras() {
    localStorage.setItem("produtoLocalStorage","");
  }
}
