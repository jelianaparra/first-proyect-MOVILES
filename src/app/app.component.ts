import { Component, OnInit } from '@angular/core';
import { MultilevelService } from './multilevel.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private mlevel: MultilevelService) {}
  ngOnInit() {
    this.mlevel.get_comments().subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('miscomentarios', JSON.stringify(data.comments));
      },
      (Error) => {
        console.log(Error);
      }
    );

    this.mlevel.get_movies().subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('Peliculas', JSON.stringify(data.movies));
      },
      (Error) => {
        console.log(Error);
      }
    );
  }
  cerrarSesion() {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
  }
}
