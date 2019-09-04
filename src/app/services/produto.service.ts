import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';

import { Produto } from '../model/produto';
import { environment }from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  
    protected db = environment.serverAPI;

  constructor(
    protected http: HttpClient
  ) { }

  save(usuario:Produto){
    //this.usuarios.push(usuario);
    return this.http.post(this.db + "produto", Produto);
  }

  getAll(){
    return this.http.get(this.db + "produtos");
  }
  
}
