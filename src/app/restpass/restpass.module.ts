import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestpassPageRoutingModule } from './restpass-routing.module';

import { RestpassPage } from './restpass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestpassPageRoutingModule
  ],
  declarations: [RestpassPage]
})
export class RestpassPageModule {}
