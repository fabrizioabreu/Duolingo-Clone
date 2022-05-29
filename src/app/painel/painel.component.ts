import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public instrucao: string = 'Traduza a frase:';
  public frases: Frase[] = FRASES;
  public resposta: string = '';
  public rodada: number = 0;
  public rodadaFrase!: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public filhoEncerrarJogo: EventEmitter<string> = new EventEmitter();


  constructor() {
    this.atualizaRodada();
  }

  ngOnDestroy(): void {
  }
  
  ngOnInit(): void {
  }

  /**
   * Captura o valor da resposta digitado.
   * 
   * @param resposta Event
   * @returns void
   */
  atualizaResposta(resposta: Event): void {
    this.resposta = ((<HTMLInputElement>resposta.target).value)
  }

  /**
   * Verifica se a resposta digitada esta correta ou não
   * 
   * @returns void
   */
  verificarResposta(): void {

    if (this.rodadaFrase.frasePtBr == this.resposta) {
      console.log("Acertou")
      console.log('rodadaFrase.frasePtBr ', this.rodadaFrase.frasePtBr);
      console.log('resposta ', this.resposta);

      // Trica a pergunta da todada
      this.rodada++

      // Progresso
      this.progresso += (100 / this.frases.length);

      if(this.rodada === 4) {
        this.filhoEncerrarJogo.emit('Vitoria')
      }
      
      //atualiza o objedo rodadaFrase
      this.atualizaRodada();

    } else {
      // Diminuir a variável tentativas
      this.tentativas --
      console.log("Errou")
      console.log('rodadaFrase.frasePtBr ', this.rodadaFrase.frasePtBr);
      console.log('resposta ', this.resposta);

      if(this.tentativas === -1) {
        this.filhoEncerrarJogo.emit('Derrota')
      }
    }
    
  }

  /**
   * Define como a frase é montada e limpa o campo digitado
   */
  atualizaRodada(): void {
    // define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];

    // limpa a resposta
    this.resposta = '';
  }
}
