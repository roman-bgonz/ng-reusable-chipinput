import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ChipsModule } from './chips/chips.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChipsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
