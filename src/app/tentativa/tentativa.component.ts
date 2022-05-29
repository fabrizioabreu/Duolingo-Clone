import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit, OnChanges {

  public coracaoVazio: string = '/assets/coracao_vazio.png';
  public coracaoCheio: string = '/assets/coracao_cheio.png';

  @Input() public valorTentativas!: number

  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]; 

  constructor() { 

  }

  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.valorTentativas !== this.coracoes.length) {

      let indice = this.coracoes.length - this.valorTentativas

      // Corações - Tentativas
      //        3 - 3 = 0
      //        3 - 2 = 1 -1 = índice [0]
      //        3 - 1 = 2 -1 = índice [1]
      //        3 - 0 = 3 -1 = índice [2]

      this.coracoes[indice -1].cheio = false;
      
    }
  }

  ngOnInit(): void {
  }

}
