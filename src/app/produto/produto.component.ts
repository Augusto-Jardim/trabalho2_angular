import { Component, OnInit } from '@angular/core';
import { produto } from '../produto'
import { PRODUTO } from '../mock-produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})

export class produtocomponent implements OnInit {

  produto = PRODUTO
  selectedproduto?: produto;
 
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(produto: produto): void {
    this.selectedproduto = produto;
  }

}
