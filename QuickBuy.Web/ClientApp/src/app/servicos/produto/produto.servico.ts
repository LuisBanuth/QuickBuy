import { Injectable, Inject, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../modelo/usuario";
import { Produto } from "../../modelo/produto";

@Injectable({
  providedIn: "root"
})

export class ProdutoServico implements OnInit {
  

  private _baseURL: string;
  public produtos: Produto[];

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseURL = baseUrl;
  }

  ngOnInit(): void {
    this.produtos = Produto[''];
  }

  get headers(): HttpHeaders {
    return new HttpHeaders().set('content-type', 'application/json'); 
  }

  public cadastrar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseURL + 'api/produto', JSON.stringify(produto), { headers: this.headers });
  }

  public salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this._baseURL + 'api/produto/salvar', JSON.stringify(produto), { headers: this.headers });
  }

  public deletar(produto: Produto): Observable<Produto[]> {
    return this.http.post<Produto[]>(this._baseURL + 'api/produto/deletar', JSON.stringify(produto), { headers: this.headers });
  }

  public obterTodoProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this._baseURL + 'api/produto');
  }

  public obterProduto(produtoId: number): Observable<Produto> {
    return this.http.get<Produto>(this._baseURL + 'api/produto');
  }

  public enviarArquivo(arquivoSelecionado: File): Observable<string> {
    const formdata: FormData = new FormData();
    formdata.append("arquivoSelecionado", arquivoSelecionado, arquivoSelecionado.name);
    return this.http.post<string>(this._baseURL + 'api/produto/enviarArquivo', formdata);
  }
}
