import { Component } from "@angular/core"
import { Usuario } from "../../modelo/usuario";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public usuario;
  public enderecoImagem = '../../../assets/img/quickLogo.jpg';
  public usuarioAutenticado: boolean;

  constructor() {
    this.usuario = new Usuario();
  }

  entrar() {
    if (this.usuario.email.length > 0 && this.usuario.senha.length > 0) {
      this.usuarioAutenticado = true;
    }
  }
}
