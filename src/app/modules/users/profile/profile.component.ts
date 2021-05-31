import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/shared/model/user';
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  loading: boolean = false;
  error: any;
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService.getProfile().subscribe(
      (user: User) => {
        this.loading = false;
        this.user = user;
      },
      (error) => {
        this.error = error;
        this.loading = false;
      }
    );
  }
}
