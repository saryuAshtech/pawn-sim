import { Component } from '@angular/core';
import { Command } from '../../shared/globals';

@Component({
  selector: 'app-chess-simulator',
  templateUrl: 'chess-simulator.page.html',
  styleUrls: ['chess-simulator.page.scss'],
})
export class ChessSimulatorPage {
  command: Command;
  uilog = '';
  constructor() { }
  onCommandReceived(event: any) {
    if (event.msg) {
      this.uilog = event.msg;
    }
    if (event.value) {
      this.command = event.value;
    }
  }
}
