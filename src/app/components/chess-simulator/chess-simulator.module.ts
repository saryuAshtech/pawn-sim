import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChessSimulatorPage } from './chess-simulator.page';

import { ChessSimulatorPageRoutingModule } from './chess-simulator-routing.module';
import { BoardComponentModule } from '../chess-board/chess-board.module';
import { ManualComponentModule } from '../manual/manual.module';
import { CommandComponentModule } from '../command/command.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChessSimulatorPageRoutingModule,
    BoardComponentModule,
    CommandComponentModule,
    ManualComponentModule,
  ],
  declarations: [ChessSimulatorPage],
})
export class ChessSimulatorPageModule {}
