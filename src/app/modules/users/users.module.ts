import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [UsersComponent, ProfileComponent],
  imports: [UsersRoutingModule, CommonModule],
})
export class UsersModule {}
