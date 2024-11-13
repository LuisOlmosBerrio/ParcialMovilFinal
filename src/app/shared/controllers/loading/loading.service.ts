import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private readonly Loadingctrl: LoadingController) { }


  public async show(){
    const loading = await this.Loadingctrl.create({});
     await loading.present();

  };

  public async dismiss(){
    await this.Loadingctrl.dismiss();
  };
}
