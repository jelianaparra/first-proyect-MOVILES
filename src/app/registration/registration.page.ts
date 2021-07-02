import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { MultilevelService } from '../multilevel.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  credentials: FormGroup;
  correo: string;
  Password: string;
  nombre: string;
  apellido: string;
  edad: number;
  genero: string;
  direccion: string;
  user: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private mlevel: MultilevelService
  ) {}

  ngOnInit() {
    //localStorage.clear();
    this.credentials = this.fb.group({
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
    });
  }
  async Register() {
    let valores = [
      this.correo,
      this.Password,
      this.apellido,
      this.name,
      this.direccion,
      this.edad,
      this.genero,
    ];
    for (let i = 0; i < valores.length; i++) {
      if (valores[i] == '' || valores[i] == undefined) {
        return alert('Todos los campos son Obligatorios');
      }
    }

    let json = {
      name: this.nombre,
      email: this.correo,
      password: this.Password,
      lastname: this.apellido,
      direction: this.direccion,
      age: this.edad,
      gender: this.genero,
      comments: undefined,
      movies: undefined,
    };
    this.mlevel.registro(json).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('id', data.dataUser.id.toString());
        localStorage.setItem('token', data.dataUser.accessToken.toString());
        this.router.navigateByUrl('/sesion', { replaceUrl: true });
      },
      (Error) => {
        //console.log(Error.error.message);
        if (Error.error.message == 'Something is wrong, Email does not Exist') {
          alert('El correo ya fue Registrado');
        }
      }
    );

    console.log(this.credentials.value);
  }

  get Email() {
    return this.credentials.get('Email');
  }

  get password() {
    return this.credentials.get('password');
  }
  get firstname() {
    return this.credentials.get('firstname');
  }

  get name() {
    return this.credentials.get('name');
  }
}
