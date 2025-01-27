import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { UsersComponent } from '../users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
