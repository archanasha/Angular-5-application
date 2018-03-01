import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  clickedBtn: EventEmitter<string> = new EventEmitter<string>();
  clickToggleBtn: EventEmitter<boolean> = new EventEmitter<boolean>();

  onViewChangeClick(showView) {
    console.log('multi toggle btn clicked :' + showView);
    // alert('multi toggle btn clicked :' + showView);
    this.clickedBtn.emit(showView);
  }
  toggleZoom(toggleBtn: boolean) {
    console.log('toggle btn clicked :' + toggleBtn);
    // alert('toggle btn clicked :' + toggleBtn);
    this.clickToggleBtn.emit(toggleBtn);
  }
  onPrimaryBtnClick(data) {
    console.log('primary clicked :' + data);
    // alert('primary clicked :' + data);
    this.clickToggleBtn.emit(data);
  }

}
