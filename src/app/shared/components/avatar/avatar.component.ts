import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StorageService } from '../../services/Storage/storage.service'; 
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'; 

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() control = new FormControl();
  @Input() onlyView = false;
  @Output() imageUploaded = new EventEmitter<string>(); 

  
  protected image: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  protected mimeType: string = 'image/jpeg';

  constructor(private storageService: StorageService) {}


  public async uploadFile(event: any) {
    const file = event.target.files[0]; 

    if (!file) {
      return;
    }

  
    if (!file.type.includes(this.mimeType)) {
      console.error('El tipo de archivo no es válido');
      return;
    }

    const bucketName = 'profile-bucket'; 
    const filePath = `avatars/${file.name}`; 

    try {
      const uploadResult = await this.storageService.uploadImage(bucketName, filePath, file);
      console.log('Imagen subida con éxito:', uploadResult);

      const publicUrl = await this.storageService.getPublicUrl(bucketName, filePath);
      console.log('URL pública de la imagen:', publicUrl);

      this.imageUploaded.emit(publicUrl);
      this.image = publicUrl;
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  }
  //tonma la foto si es necesario
  public async takePhoto() {
    try {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,      
      });


      this.image = photo.webPath ?? 'https://ionicframework.com/docs/img/demos/avatar.svg';

      
      const response = await fetch(photo.webPath!);
      const blob = await response.blob();

      //pa que no se repiita la imagen agarra el tiempo
      const fileName = `avatars/${new Date().getTime()}.jpg`;
      const file = new File([blob], fileName, { type: 'image/jpeg' });

      // Subir la foto a Supabase
      const bucketName = 'profile-bucket';
      const uploadResult = await this.storageService.uploadImage(bucketName, fileName, file);
      console.log('Imagen subida con éxito:', uploadResult);

      const publicUrl = await this.storageService.getPublicUrl(bucketName, fileName);
      console.log('URL pública de la imagen:', publicUrl);

      //poner url publica
      this.imageUploaded.emit(publicUrl);
      this.image = publicUrl;
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
}

