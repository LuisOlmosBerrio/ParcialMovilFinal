import { Component, Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  protected image = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  @Input() control = new FormControl();
  @Input() onlyView = false;

  protected mimeType = 'image/jpeg';

  constructor() {}

  public uploadFile(event: any){
    console.log(event.target.files[0])

  };
}
