import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';

import { Usuario } from '../model/usuario';
import { environment }from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //usuarios:Array<Usuario> =[
    //{uid: "1", nome: "Ana", email: "ana@gmail.com", pws: "11111"},
    //{uid: "2", nome: "Pedro", email: "pedro@gmail.com", pws: "22222"},

 // ];
    protected db = environment.serverAPI;

  constructor(
    protected http: HttpClient
  ) { }

  save(usuario:Usuario){
    //this.usuarios.push(usuario);
    return this.http.post(this.db + "usuarios", usuario);
  }

  getAll(){
    return this.http.get(this.db + "usuarios");
  }
  
}
