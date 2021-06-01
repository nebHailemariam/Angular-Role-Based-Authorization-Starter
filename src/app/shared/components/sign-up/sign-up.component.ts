import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Role } from '../../model/role';
import { User } from '../../model/user';
declare var $: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  submitted: boolean = false;
  loading: boolean = false;
  error: any;
  userInstance: User = new User();

  constructor(
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {}

  onSubmit(signUpForm: NgForm) {
    this.submitted = true;
    this.loading = true;
    this.authenticationService
      .signUp(
        this.userInstance.username,
        this.userInstance.password!,
        this.userInstance.email
      )
      .pipe(first())
      .subscribe({
        next: () => {
          $('#signUpModal').modal('toggle');
          $('#loginModal').modal('toggle');
          this.userInstance = new User();
          this.loading = false;
          this.error = undefined;

          //  Resetting Login form
          this.resetsignUpForm(signUpForm);
          // Redirecting to the home page
          let returnUrl: string;
          returnUrl = '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
  }
  resetsignUpForm(signUpForm: NgForm) {
    signUpForm.resetForm();
  }
}
