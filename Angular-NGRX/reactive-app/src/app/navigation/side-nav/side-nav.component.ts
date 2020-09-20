import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  @Output() closeSideNav = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onCloseSideNav() {
    this.closeSideNav.emit();
  }
}
