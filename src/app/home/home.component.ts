import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../shared/model/user';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { UserService } from '../services/user/user.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  loading = false;
  user: User;
  userFromApi: User;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
    this.user = this.authenticationService.userValue;
  }

  ngOnInit() {
    this.loading = true;
    if (this.user)
      this.userService
        .getById(this.user.id)
        .pipe(first())
        .subscribe((user: User) => {
          this.loading = false;
          this.userFromApi = user;
        });
  }
}
