import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive ({
    // tslint:disable-next-line:directive-selector
    selector: 'buttons-item',
})
export class CbButtonItemDirective {

    @Input() title: string;
    @Input() id: string;
    @Input() isActive = false;
    @Input() isDisabled = false;
    @Input() activeTooltipText: string;
    @Input() inActiveTooltipText: string;
    @Input() btnItemClass: string;
    @Output() clickedBtn = new EventEmitter<any>();
}
