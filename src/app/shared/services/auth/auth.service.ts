import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly fbAuth: AngularFireAuth) {}

  public register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.fbAuth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  public async login(email: string, Password: string) {
    return new Promise((resolve, reject) => {
      this.fbAuth
        .signInWithEmailAndPassword(email, Password)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  public async logout() {
    return await this.fbAuth.signOut();
  }

  public async isAuth() {
    return new Promise((resolve, reject) => {
      this.fbAuth.onAuthStateChanged(
        (user) => {
          if (user) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        (exception) => {
          console.error('Error en la autenticación:', exception);
          reject(exception);
        }
      );
    });
  }

  getCurrentUser() {
    return this.fbAuth.authState;
  }
}
