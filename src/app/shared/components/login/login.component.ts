import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from '../../model/role';
import { NgForm } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted: boolean = false;
  loading: boolean = false;
  error: any;
  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }
  userInstance: User = new User();

  ngOnInit(): void {}

  onSubmit(loginForm: NgForm) {
    this.submitted = true;
    this.loading = true;
    this.authenticationService
      .login(this.userInstance.username, this.userInstance.password!)
      .pipe(first())
      .subscribe({
        next: () => {
          $('#loginModal').modal('toggle');
          $('.modal-backdrop').remove();
          this.userInstance = new User();
          this.loading = false;
          this.error = undefined;

          //  Resetting Login form
          this.resetLoginForm(loginForm);
          // Redirecting to the home page
          let returnUrl: string;
          if (this.authenticationService.userValue.role == Role.Admin)
            returnUrl = '/admin';
          else returnUrl = '/home';
          this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
  resetLoginForm(loginForm: NgForm) {
    loginForm.resetForm();
  }
}
