import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  {
  @Input() id!: number;
  @Input() img!: string;
  @Input() name!: string;
  @Input() breed!: string;
  @Input() age!: number;
  @Input() birthDate!: string;
  @Input() owner!: string;


  constructor(private readonly navCtr: NavController) { }

  viewPetDetails() {
    console.log("Redirigiendo con ID de la mascota:", this.id);
    this.navCtr.navigateForward(`/info-pet/${this.id}`);
  }

}
