import { Component, Input, OnInit, EventEmitter, Output, ContentChildren, QueryList } from '@angular/core';
import { CbButtonItemDirective } from './cb-buttons-item.directive';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'cb-buttons',
    templateUrl: './cb-buttons.component.html',
    styleUrls: ['./cb-buttons.component.scss']
})

export class CbButtonComponent implements OnInit {

    @ContentChildren(CbButtonItemDirective) btnsItemsCollection: QueryList<CbButtonItemDirective>;
    @Input() customDivClass: string;
    @Input() isToggleBtn = false;

    ngOnInit() {
    }
    onBtnClicked(btnItem: CbButtonItemDirective) {
        if (this.isToggleBtn && this.btnsItemsCollection.length === 1) {
            console.log('istoggle', this.isToggleBtn);
            this.toggleButtons(btnItem);
        } else if (this.btnsItemsCollection.length > 1) {
            console.log('else if', this.isToggleBtn);
            this.setActive(btnItem);
        } else if (!this.isToggleBtn && this.btnsItemsCollection.length === 1) {
            btnItem.clickedBtn.emit(btnItem.isActive);
        } else {
            this.emitButtonData(btnItem);
        }
    }

    toggleButtons(btnItem: CbButtonItemDirective) {
        if (this.btnsItemsCollection.length === 1) {
            this.toggleButton(btnItem);
        }
    }
    toggleButton(btnItem: CbButtonItemDirective) {
        btnItem.isActive = !btnItem.isActive;
        btnItem.clickedBtn.emit(btnItem.isActive);
    }
    setActive(btnItem: CbButtonItemDirective) {
        this.btnsItemsCollection.forEach((btn) => {
            console.log('btnItem.id', btnItem.id);
            btn.isActive = btn.id === btnItem.id;
        });
        btnItem.clickedBtn.emit(btnItem.id);
    }

    emitButtonData(btnItem: CbButtonItemDirective) {
        btnItem.clickedBtn.emit(btnItem.id);
    }
}
