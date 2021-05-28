import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './core/fake-backend';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeRoutingModule } from './modules/home/home-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeModule } from './modules/home/home.module';
import { SignUpComponent } from './shared/components/sign-up/sign-up.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    HomeModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SignUpComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
