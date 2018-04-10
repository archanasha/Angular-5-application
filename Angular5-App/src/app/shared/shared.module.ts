import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule ({
    declarations: [
        DropdownDirective,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DropdownDirective,
    ]
})
export class SharedModule {}
