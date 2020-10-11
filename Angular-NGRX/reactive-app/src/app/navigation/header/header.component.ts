import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit, OnDestroy {

  authSubscription: Subscription[] = [];
  @Output() sideToggle = new EventEmitter();
  isAuth = false;

  constructor(private readonly authService: AuthService) { }


  ngOnInit(): void {
    this.authSubscription.push(this.authService.authChange.subscribe(authChanges => {
      this.isAuth = authChanges;
    }));
  }

  onSideToggle() {
    this.sideToggle.emit();
  }

  exitApplication() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription.forEach(e => {
      e.unsubscribe();
    });
  }

}
