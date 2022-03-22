import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChessSimulatorPage } from './chess-simulator.page';

const routes: Routes = [
  {
    path: '',
    component: ChessSimulatorPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChessSimulatorPageRoutingModule {}
