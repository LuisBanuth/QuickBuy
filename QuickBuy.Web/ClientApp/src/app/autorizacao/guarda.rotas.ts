import { Inject, Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsuarioServico } from '../servicos/usuario/usuario.servico';

@Injectable({
  providedIn: 'root'
})

export class GuardaRotas implements CanActivate {

  constructor(private route: Router, private usuarioServico: UsuarioServico) {

    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.usuarioServico.usuario_autenticado()) {
      return true;
    }
    this.route.navigate(['/entrar'], { queryParams: {returnUrl: state.url} });
    return true;
   }

}
