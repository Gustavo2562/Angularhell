import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Produto } from 'src/app/model/produto';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-produto',
  templateUrl: './list-produto.component.html',
  styleUrls: ['./list-produto.component.css']
})
export class ListProdutoComponent implements OnInit {

  protected produtos:any;

  constructor(
    public produtoService: ProdutoService,
    protected router:Router

  ) { }

  ngOnInit() {
    this.produtos = this.produtoService.getAll()
  }

  editar(produto:any){ //any para n dar erro na key
    console.log(produto.key);
    this.router.navigate(['addUsuario', produto.key])
  }

  apagar(produto){
    if (confirm("Apagar esse produto?"))
    this.produtoService.remove(produto.key)
  }
}