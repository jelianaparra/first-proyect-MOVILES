import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MultilevelService } from '../multilevel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miscomentarios',
  templateUrl: './miscomentarios.page.html',
  styleUrls: ['./miscomentarios.page.scss'],
})
export class MiscomentariosPage implements OnInit, AfterViewInit {
  lista: string[];
  peliculas: any = [];
  Like: any = [];
  disLike: any = [];
  comentarios: String = '';
  miscomentarios: any = [];
  constructor(private mlevel: MultilevelService, private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('id')) {
      this.router.navigateByUrl('/login');
    }
    /* let peliculas = JSON.parse(localStorage.getItem('miscomentarios'));

    for (let i = 0; i < peliculas.length; i++) {
      this.miscomentarios.push(peliculas[i]);
      //this.peliculas[i].releaseDate = moment(
      //this.peliculas[i].releaseDate
      // ).format('DD-MM-YYYY');
    }*/
  }

  ngAfterViewInit() {
    let peliculas = JSON.parse(localStorage.getItem('miscomentarios'));

    for (let i = 0; i < peliculas.length; i++) {
      this.miscomentarios.push(peliculas[i]);
      //this.peliculas[i].releaseDate = moment(
      //this.peliculas[i].releaseDate
      // ).format('DD-MM-YYYY');
    }
    console.log(this.miscomentarios);
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

  eliminar(i) {
    console.log(this.miscomentarios[i]);
    let json = { id: this.miscomentarios[i]._id };
    this.mlevel.eliminarcomentarios(json).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.removeItem('miscomentarios');
        this.mlevel.get_comments().subscribe(
          (data: any) => {
            console.log(data);
            localStorage.setItem(
              'miscomentarios',
              JSON.stringify(data.comments)
            );
            let comments = data.comments;
            this.miscomentarios = [];
            for (let i = 0; i < comments.length; i++) {
              this.miscomentarios.push(comments[i]);
            }
          },
          (Error) => {
            console.log(Error);
          }
        );
      },
      (Error) => {
        console.log(Error);
      }
    );
  }
}
