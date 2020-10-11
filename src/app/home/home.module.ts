import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from '../users/users.component';

import { HomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [HomePage, UsersComponent],
  providers: [ApiService]
})
export class HomePageModule {}
