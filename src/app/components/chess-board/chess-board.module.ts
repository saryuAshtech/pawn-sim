import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ChessBoardComponent } from './chess-board.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [ChessBoardComponent],
  exports: [ChessBoardComponent],
})
export class BoardComponentModule {}
