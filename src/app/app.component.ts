import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jogoEmAndamento: boolean = true
  tipoEncerramento!: string;
  
  /**
   * Encerra o jogo e muda de tela.
   * 
   * @param tipo string
   */
  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }

  /**
   * Reinicia as variáveis de início do jogo
   */
  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento = '';
  }
}
