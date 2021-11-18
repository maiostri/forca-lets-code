import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/model/Status';

@Component({
  selector: 'app-game-result',
  templateUrl: './game-result.component.html',
  styleUrls: ['./game-result.component.css']
})
export class GameResultComponent implements OnInit {

  @Input() numeroDeTentativas: number = 0;

  @Input() status : Status = Status.IN_GAME;

  public opcoesDeStatus: typeof Status = Status;

  constructor() { }

  ngOnInit(): void {
  }

}
