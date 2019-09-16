import { Component, OnInit } from '@angular/core';
import { Produto } from '../../model/produto';
import { ProdutoService } from '../../services/produto.service';
import {Router, ActivatedRouteSnapshot, ActivatedRoute}from "@angular/router";
@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  protected produto:Produto = new Produto;
  private id: String;

  constructor( public produtoService: ProdutoService,
    protected router: Router,
    protected activedRouter: ActivatedRoute
  ){}

  ngOnInit() {
    this.id = this.activedRouter.snapshot.paramMap.get("id");
    if (this.id) {
      this.produtoService.get(this.id).subscribe(
        res => {
          this.produto = res;
        },
        err=>{
           this.id = null
        }
      );
    } 
  }

  onsubmit(form){
    console.log(form);
    this.produtoService.update(this.produto, this.id).then(
      res =>{
        console.log(res);
        this.produto = new Produto;
        form.reset();
        this.router.navigate(["/"]);
        alert("cadastro realizado")
      },
    err=>{
      console.log(err);
      alert("erro ao cadastrar")
      } 
    );
  }
}
