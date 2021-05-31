import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  loading = false;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getAll()
      .pipe(first())
      .subscribe((users: User[]) => {
        this.loading = false;
        this.users = users;
        console.log(users);
      });
  }
}
