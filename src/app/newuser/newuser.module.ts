import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewuserPageRoutingModule } from './newuser-routing.module';

import { NewuserPage } from './newuser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewuserPageRoutingModule
  ],
  declarations: [NewuserPage]
})
export class NewuserPageModule {}
