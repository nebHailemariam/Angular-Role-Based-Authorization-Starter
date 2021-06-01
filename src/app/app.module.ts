import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Core
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';

import { HomeRoutingModule } from './modules/home/home-routing.module';

// Modules
import { HomeModule } from './modules/home/home.module';
import { UsersModule } from './modules/users/users.module';

// External Modules
import { FormsModule } from '@angular/forms';

// Components
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/components/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';
import { UsersRoutingModule } from './modules/users/users-routing.module';

// Services
import { UserService } from './services/user/user.service';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HomeModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersModule,
    UsersRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    NavbarComponent,
    SignUpComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
