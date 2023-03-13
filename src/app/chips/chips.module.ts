import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipsComponent } from './chips/chips.component';

@NgModule({
  declarations: [
    ChipsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChipsComponent
  ]
})
export class ChipsModule { }
