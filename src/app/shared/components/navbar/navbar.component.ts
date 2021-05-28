import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Role } from '../../model/role';
import { User } from '../../model/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: User;
  loginStatus: boolean = false;
  navbarOpen: boolean = false;

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(
      (user: User) => (this.user = user)
    );
  }
  get isAdmin(): boolean {
    return this.user && this.user.role === Role.Admin;
  }
  logout(): void {
    this.authenticationService.logout();
  }
  login(): void {
    this.loginStatus = !this.loginStatus;
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit(): void {}
}
