import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StorageService } from '../../services/Storage/storage.service';  // Importar el servicio de Storage

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() control = new FormControl();
  @Input() onlyView = false; // Si solo es vista, no permitirá la carga de la imagen
  @Output() imageUploaded = new EventEmitter<string>(); // Emite la URL de la imagen cargada

  protected image = 'https://ionicframework.com/docs/img/demos/avatar.svg';
  protected mimeType = 'image/jpeg';

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

      // A
      this.image = publicUrl;
    } catch (error) {
      console.error('Error al subir la imagen:', error);
    }
  }
}
