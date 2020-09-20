import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  @Output() sideToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSideToggle() {
    this.sideToggle.emit();
  }

}
