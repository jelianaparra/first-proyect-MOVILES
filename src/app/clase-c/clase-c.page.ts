import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { MultilevelService } from '../multilevel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clase-c',
  templateUrl: './clase-c.page.html',
  styleUrls: ['./clase-c.page.scss'],
})
export class ClaseCPage implements OnInit {
  peliculas: any = [];
  Like: any = [];
  disLike: any = [];
  comentarios: String = '';
  constructor(private mlevel: MultilevelService, private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('id')) {
      this.router.navigateByUrl('/login');
    }
    let peliculas = JSON.parse(localStorage.getItem('Peliculas'));

    for (let i = 0; i < peliculas.length; i++) {
      this.peliculas.push(peliculas[i]);
      this.Like.push(peliculas[i].like);
      this.disLike.push(peliculas[i].disLike);

      //this.peliculas[i].releaseDate = moment(
      //  this.peliculas[i].releaseDate
      // ).format('DD-MM-YYYY');
    }
  }
  like(i) {
    let comentarios = JSON.parse(localStorage.getItem('Peliculas'));

    comentarios[i].like++;
    this.Like[i] = comentarios[i].like;

    localStorage.removeItem('Peliculas');
    this.mlevel.actualizarcomentarios(comentarios[i]).subscribe(
      (data: any) => {
        console.log(data);
      },
      (Error) => {
        console.log(Error);
      }
    );
    localStorage.setItem('Peliculas', JSON.stringify(comentarios));
  }

  dislike(i) {
    let comentarios = JSON.parse(localStorage.getItem('Peliculas'));

    comentarios[i].disLike++;
    this.disLike[i] = comentarios[i].disLike;

    localStorage.removeItem('Peliculas');
    this.mlevel.actualizarcomentarios(comentarios[i]).subscribe(
      (data: any) => {
        console.log(data);
      },
      (Error) => {
        console.log(Error);
      }
    );
    localStorage.setItem('Peliculas', JSON.stringify(comentarios));
  }

  comentar(i) {
    let json = {
      content: this.comentarios,
      author: this.peliculas[i].director,
      like: 0,
      dislike: 0,
      movie: this.peliculas[i].title,
    };

    let comentarios = JSON.parse(localStorage.getItem('miscomentarios'));
    comentarios.push(json);

    this.mlevel.addcomentarios(json).subscribe(
      (data: any) => {
        console.log(data);
        this.comentarios = '';
        localStorage.removeItem('miscomentarios');
        localStorage.setItem('miscomentarios', JSON.stringify(comentarios));
      },
      (Error) => {
        console.log(Error);
      }
    );
  }
}
