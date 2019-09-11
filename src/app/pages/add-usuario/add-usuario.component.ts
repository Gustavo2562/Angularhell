import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import {Router}from "@angular/router";
import { Endereco } from '../../model/endereco';
@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario:Usuario = new Usuario;
  protected endereco:Endereco = new Endereco;
  
  constructor(  public usuarioService: UsuarioService,
    protected router:Router
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    console.log(form);

      this.usuario.endereco = this.endereco
      this.usuarioService.save(this.usuario).then(
      res =>{
        console.log(res);
        this.usuario = new Usuario;
        form.reset();
        this.router.navigate(["/"]);
        alert("cadastrado")
      },
    err=>{
      console.log(err);
      alert({
        type: 'error'
        
    
      })
      } 
    );
    this.usuario = new Usuario;
    //console.log(this.usuario, this.usuarioService.usuarios);
    form.reset();
    //this.router.navigate(["/"]);
  }
}