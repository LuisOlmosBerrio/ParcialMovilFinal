import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPetPageRoutingModule } from './info-pet-routing.module';

import { InfoPetPage } from './info-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPetPageRoutingModule
  ],
  declarations: [InfoPetPage]
})
export class InfoPetPageModule {}
