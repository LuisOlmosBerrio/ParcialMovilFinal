import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AuthService } from './services/auth/auth.service';
import { LoadingService } from './controllers/loading/loading.service';
import { CardsComponent } from './components/cards/cards.component';

const COMPONENTS = [InputComponent, ButtonComponent, AvatarComponent, CardsComponent];
const MODULES = [CommonModule, FormsModule, IonicModule, ReactiveFormsModule];
const PROVIDERS = [AuthService];
const CONTROLLERS = [LoadingService];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...MODULES],
  providers:[...PROVIDERS, ...CONTROLLERS]
})
export class SharedModule {}
