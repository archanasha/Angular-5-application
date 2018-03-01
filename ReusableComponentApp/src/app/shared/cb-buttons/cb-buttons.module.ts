import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap';
import { CbButtonComponent } from './cb-buttons.component';
import { CbButtonItemDirective } from './cb-buttons-item.directive';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
  ],
  declarations: [
      CbButtonComponent,
      CbButtonItemDirective
  ],
  exports: [
      CbButtonComponent,
      CbButtonItemDirective
  ],
  providers: [ ],
})
export class CbButtonsModule { }
