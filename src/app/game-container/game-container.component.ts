import { Palavra } from './../model/Palavra';
import { Component, OnInit } from '@angular/core';
import { Status } from '../model/Status';

@Component({
  selector: 'app-game-container',
  templateUrl: './game-container.component.html'
})

export class GameContainerComponent implements OnInit {
  
  palavraParaAdivinhar: string = ""; // "angular"
  palavra: Palavra = new Palavra("", "");
  palavraEntrada: string = ""; // "_______"
  numeroDeTentativas: number = 0;
  maximoDeTentativas: number = 6;
  palavrasPossiveis: string[] = ["angular", "typescript", "forca", "coding"];
  statusAtual: Status = Status.IN_GAME;

  constructor() {

  }

  ngOnInit(): void {
    this.reinicia();
  }

  reinicia() {
    const palavraAleatoria = this.
    palavrasPossiveis[Math.floor(Math.random() * this.palavrasPossiveis.length)];
    this.palavraParaAdivinhar = palavraAleatoria;
    this.palavra = new Palavra("essa é uma dica", this.palavraParaAdivinhar);
    this.palavraEntrada = "_".repeat(palavraAleatoria.length);
    this.statusAtual = Status.IN_GAME;
    this.numeroDeTentativas = 0;
  }

  verificaStatus() {
    // para eu ganhar o jogo
    if (this.palavraEntrada == this.palavraParaAdivinhar) {
      this.statusAtual = Status.WIN;
    }
    else if (this.numeroDeTentativas >= this.maximoDeTentativas) {
      this.statusAtual = Status.LOSE
    }
  }

  verificaLetra(letra: string) {

    // G -> vou buscar em toda a string "global"
    // i -> não vou fazer questao de ser case-sensitive. (D = d, E = e)
    const listaDePosicoes = [...this.palavraParaAdivinhar
      .matchAll(new RegExp(letra, "gi"))].map(letraEncontrada => letraEncontrada.index);

    // A N G U L A R
    // A _ _ _ _ R _
    // 0 1 2 3 4 5 6
    // Se eu digito o A => [0, 5]
    // Se eu digito o R => [6]
    // Se eu digito X => [] não tem!!

    // Errei. Não tem a letra na palavra.
    if (listaDePosicoes.length == 0) {
      this.numeroDeTentativas++;
    } else {

      // Vamos pegar cada uma das posições, e substituir na palavra entrada.
      listaDePosicoes.forEach(indice => {
        const indiceTratado = indice ?? -1;

        if (indiceTratado != -1) {
          let arrayDeLetras = this.palavraEntrada.split("");
          arrayDeLetras[indiceTratado] = this.palavraParaAdivinhar[indiceTratado];
          this.palavraEntrada = arrayDeLetras.join("");
        }
      });
    }

    // Ganhou? Perdeu? Continua??
    this.verificaStatus();
  }

}
