import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { MultilevelService } from '../multilevel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yo',
  templateUrl: './yo.page.html',
  styleUrls: ['./yo.page.scss'],
})
export class YOPage implements OnInit {
  correo: string;
  name: string;
  apellido: string;
  edad: number;
  genero: string;
  direccion: string;
  constructor(private mlevel: MultilevelService, private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('id')) {
      this.router.navigateByUrl('/login');
    }
  }

  ionViewDidEnter() {
    this.name = '';
    this.apellido = '';
    this.edad = undefined;
    this.genero = '';
    this.direccion = '';
    this.correo = '';
    let json = { id: localStorage.getItem('id') };
    this.mlevel.getInfo(json).subscribe(
      (data: any) => {
        console.log(data.user);
        this.name = data.user.name;
        this.apellido = data.user.lastname;
        this.edad = data.user.age;
        this.genero = data.user.gender;
        this.direccion = data.user.direction;
        this.correo = data.user.email;
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  actualizar() {
    let valores = [
      this.correo,
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
      id: localStorage.getItem('id'),
      name: this.name,
      email: this.correo,
      lastname: this.apellido,
      direction: this.direccion,
      age: this.edad,
      gender: this.genero,
    };

    this.mlevel.actualizarperfil(json).subscribe(
      (data: any) => {
        console.log(data);
        alert('Datos Actualizados Sadisfactoriamente');
      },
      (Error) => {
        console.log(Error);
      }
    );
  }
}
