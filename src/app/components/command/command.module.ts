import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AutoGrowDirectiveModule } from '../../shared/directives/auto-grow.module';
import { CommandComponent } from './command.component';

@NgModule({
  imports: [CommonModule, IonicModule, AutoGrowDirectiveModule],
  declarations: [CommandComponent],
  exports: [CommandComponent],
})
export class CommandComponentModule {}
