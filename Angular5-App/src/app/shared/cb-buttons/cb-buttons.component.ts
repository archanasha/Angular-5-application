import { Component, Input, OnInit, EventEmitter, Output, ContentChildren, QueryList } from '@angular/core';
import { CbButtonItemDirective } from './cb-buttons-item.directive';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cb-buttons',
    templateUrl: './cb-buttons.component.html',
    styleUrls: []
})

export class CbButtonComponent implements OnInit {

    @ContentChildren(CbButtonItemDirective) btnsItemsCollection: QueryList<CbButtonItemDirective>;
    @Input() customDivClass: string;
    @Input() isToggleBtn = false;

    ngOnInit() {
    }

    onBtnClicked(btnItem: CbButtonItemDirective) {
        console.log('onBtnClicked ', btnItem.id);
        this.isToggleBtn || this.btnsItemsCollection.length === 1 ? this.toggleBtn(btnItem) : this.emitDataBtn(btnItem);
    }

    toggleBtn(btnItem: CbButtonItemDirective) {
        btnItem.isActive = true;
    }
    emitDataBtn(btnItem: CbButtonItemDirective) {
        console.log('emitdata ', btnItem.id);
        btnItem.clickedBtn.emit(btnItem.id);
    }
}
