import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chess-board',
    loadChildren: () => import('./components/chess-simulator/chess-simulator.module').then( m => m.ChessSimulatorPageModule)
  },
  {
    path: '',
    redirectTo: 'chess-board',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
