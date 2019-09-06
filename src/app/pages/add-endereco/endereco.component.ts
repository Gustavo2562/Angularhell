import { Component, OnInit, Input } from '@angular/core';
import { Endereco} from 'src/app/model/endereco'

@Component({
  selector: 'app-cep',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class enderecoComponent implements OnInit {

  @Input() public endereco: Endereco = new Endereco;

  constructor() { }

  ngOnInit() {
  }

}
