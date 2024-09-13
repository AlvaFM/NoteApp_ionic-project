import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestpassPage } from './restpass.page';

const routes: Routes = [
  {
    path: '',
    component: RestpassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestpassPageRoutingModule {}
