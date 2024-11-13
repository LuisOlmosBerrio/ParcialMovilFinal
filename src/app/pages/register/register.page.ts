import { Component,} from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/controllers/loading/loading.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public name!: FormControl;
  public Lastname!: FormControl;
  public Age!: FormControl;
  public Phone!: FormControl;
  public Email!: FormControl;
  public Password!: FormControl;
  public confirmPassword!: FormControl;
  public registerForm!: FormGroup;

  constructor(private readonly authsrv: AuthService, private readonly Loadingsrv: LoadingService) {

    this.InitForm();
  }


  public async doRegister(){
    try {
      await this.Loadingsrv.show()
      console.log(this.registerForm.value);
      const { Email, Password } = this.registerForm.value;
      const response = await this.authsrv.register(Email, Password);
      console.log(response)
      await this.Loadingsrv.dismiss();
    } catch (error) {
      await this.Loadingsrv.dismiss();
      console.error(error);
      
    }
   

  };

  private InitForm() {
    this.name = new FormControl('', [Validators.required]);
    this.Lastname = new FormControl('', [Validators.required]);
    this.Age = new FormControl('', [Validators.required]);
    this.Phone = new FormControl('', [
      Validators.required,
      Validators.pattern(/^3\d{9}$/),
    ]);
    this.Email = new FormControl('', [Validators.required, Validators.email]);
    this.Password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.confirmPassword = new FormControl('', Validators.required);
    this.registerForm = new FormGroup(
      {
        name: this.name,
        Lastname: this.Lastname,
        Age: this.Age,
        Phone: this.Phone,
        Email: this.Email,
        Password: this.Password,
        confirmPassword: this.confirmPassword,
      },
      
    );
  }
  
}
