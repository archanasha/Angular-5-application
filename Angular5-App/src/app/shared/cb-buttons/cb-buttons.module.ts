import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CbButtonComponent } from './cb-buttons.component';
import { CbButtonItemDirective } from './cb-buttons-item.directive';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
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

export class CbButtonModule { }
