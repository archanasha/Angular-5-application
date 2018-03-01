import { Directive, Input, Output, EventEmitter } from '@angular/core';

@Directive ({
    // tslint:disable-next-line:directive-selector
    selector: 'buttons-item'
})
export class CbButtonItemDirective {

    @Input() title: string;
    @Input() id: string;
    @Input() isActive = false;
    @Input() isDisabled = false;
    @Input() isTooltipEnabled = false;
    @Input() activeTooltipText: string;
    @Input() inActiveTooltipText: string;
    @Input() tooltipPlacement: string;
    @Input() activeIconClass: string;
    @Input() inActiveIconClass: string;
    @Input() btnItemClass: string;
    @Input() btnActiveClass: string;
    @Input() btnSizeClass: string;
    @Output() clickedBtn: EventEmitter<boolean | string> = new EventEmitter<boolean | string>();
}
