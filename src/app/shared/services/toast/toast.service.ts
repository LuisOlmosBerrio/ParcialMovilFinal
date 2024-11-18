import { Injectable } from '@angular/core';
import { Toast } from '@capacitor/toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  async showSuccess(message: string) {
    await Toast.show({
      text: message,
      duration: 'short',
      position: 'bottom', 
    });
  }

  async showError(message: string) {
    await Toast.show({
      text: `Error: ${message}`,
      duration: 'long',
      position: 'bottom',
    });
  }

  async showWarning(message: string) {
    await Toast.show({
      text: `Advertencia: ${message}`,
      duration: 'short',
      position: 'center',
    });
  }
}
