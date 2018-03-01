import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CbButtonComponent } from './cb-buttons/cb-buttons.component';
import { CbButtonsModule } from './cb-buttons/cb-buttons.module';

@NgModule({
  imports: [
    CommonModule,
    CbButtonsModule,
  ],
  declarations: [],
  exports: []
})
export class SharedModule { }
