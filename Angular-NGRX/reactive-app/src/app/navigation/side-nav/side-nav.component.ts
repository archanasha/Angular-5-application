import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service'

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit, OnDestroy {

  authSubscription: Subscription;
  @Output() closeSideNav = new EventEmitter<void>();
  isAuth = false;
  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authChanges => {
      this.isAuth = authChanges;
    });
  }

  onCloseSideNav() {
    this.closeSideNav.emit();
  }

  exitApplication() {
    this.closeSideNav.emit();
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
