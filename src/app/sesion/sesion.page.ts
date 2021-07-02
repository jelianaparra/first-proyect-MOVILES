import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { MultilevelService } from '../multilevel.service';
import { Router } from '@angular/router';
//import * as moment from 'moment';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {
  lista: string[];
  peliculas_total: any = [];
  peliculas: any = [];
  buscador: string;
  slideOpts = { initialSlide: 1, speed: 400, autoplay: true };
  constructor(private mlevel: MultilevelService, private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('id')) {
      this.router.navigateByUrl('/login');
    }
    let peliculas = JSON.parse(localStorage.getItem('Peliculas'));

    for (let i = 0; i < peliculas.length; i++) {
      this.peliculas.push(peliculas[i]);
      //this.peliculas[i].releaseDate = moment(
      //  this.peliculas[i].releaseDate
      // ).format('DD-MM-YYYY');
    }
    this.peliculas_total = this.peliculas;
  }
  buscar() {
    console.log(this.buscador);
    this.mlevel.buscar({ title: this.buscador }).subscribe(
      (data: any) => {
        console.log(data);
        if (data.movies.length > 0) {
          this.peliculas = [];
          this.peliculas.push(data.movies[0]);
        } else {
          this.peliculas = this.peliculas_total;
        }
      },
      (Error) => {
        console.log(Error);
      }
    );
  }
}
