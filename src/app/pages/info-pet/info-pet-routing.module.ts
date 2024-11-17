import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPetPage } from './info-pet.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPetPageRoutingModule {}
