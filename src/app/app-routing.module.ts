import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
// import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guard/auth.guard';
import { Role } from './shared/model/role';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/users/users-routing.module').then(
        (m) => m.UsersRoutingModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home-routing.module').then(
        (m) => m.HomeRoutingModule
      ),
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
