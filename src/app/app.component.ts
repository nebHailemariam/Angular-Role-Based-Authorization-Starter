import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication/authentication.service';
import { User } from './model/user';
import { Role } from './model/role';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe((x) => (this.user = x));
  }

  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
  }

  logout() {
    this.authenticationService.logout();
  }
}
