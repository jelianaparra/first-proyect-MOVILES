import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { MultilevelService } from '../multilevel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;
  user: string;
  correo: string;
  Password: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private mlevel: MultilevelService
  ) {}

  ngOnInit() {
    // localStorage.clear();
    this.credentials = this.fb.group({
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  async login() {
    if (
      this.correo == '' ||
      this.correo == undefined ||
      this.Password == '' ||
      this.Password == undefined
    ) {
      return alert('Todos los campos son Obligatorios');
    }
    let json = { email: this.correo, password: this.Password };
    this.mlevel.login(json).subscribe(
      (data: any) => {
        console.log(data.id, data);

        localStorage.setItem('id', data.dataUser.id.toString());
        localStorage.setItem('token', data.dataUser.accessToken.toString());
        this.router.navigateByUrl('/sesion', { replaceUrl: true });
      },
      (Error) => {
        //console.log(Error.error.message);
        if (Error.error.message == 'Something is wrong, Email does not Exist') {
          alert('usuario no registrado');
        }
      }
    );

    console.log(this.credentials.value);
  }

  get email() {
    return this.credentials.get('Email');
  }

  get password() {
    return this.credentials.get('password');
  }
}
