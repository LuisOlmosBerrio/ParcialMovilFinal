import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  {
  @Input() img: string = '';
  @Input() name: string = '';
  @Input() breed: string = '';
  @Input() age!: number;
  @Input() birthDate!: Date;


  constructor() { }



}
