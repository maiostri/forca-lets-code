import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-input',
  templateUrl: './game-input.component.html',
  styleUrls: ['./game-input.component.css']
})
export class GameInputComponent implements OnInit {

  @Output() onSuggest: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  tentarLetra(letra: string) {
    this.onSuggest.emit(letra);
  }

}

// Estado: numero de tentativas, palavra atual -> Componentes "SMART"
// Sem estado: recebe e processa. -> COMPONENTES "DUMB"
