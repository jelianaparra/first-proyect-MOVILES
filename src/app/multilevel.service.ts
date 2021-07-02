import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MultilevelService {
  url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  get_movies() {
    return this.http.get(this.url + 'movies/allmovies');
  }

  addcomentarios(json) {
    let headers = { 'content-type': 'application/json' };

    return this.http.post(this.url + 'comments/addcomments', json, { headers });
  }

  get_comments() {
    return this.http.get(this.url + 'comments/allcomments');
  }

  actualizarcomentarios(json) {
    let headers = { 'content-type': 'application/json' };

    return this.http.put(this.url + 'movies/uptademovies', json, {
      headers,
    });
  }
  eliminarcomentarios(json) {
    let headers = { 'content-type': 'application/json' };

    return this.http.post(this.url + 'comments/deletecomments', json, {
      headers,
    });
  }

  registro(json) {
    let headers = { 'content-type': 'application/json' };

    return this.http.post(this.url + 'api/register', json, {
      headers,
    });
  }

  login(json) {
    let headers = { 'content-type': 'application/json' };

    return this.http.post(this.url + 'api/login', json, {
      headers,
    });
  }

  getInfo(json) {
    let headers = { 'content-type': 'application/json' };

    return this.http.post(this.url + 'profile/myprofile', json, {
      headers,
    });
  }
  actualizarperfil(json) {
    let headers = { 'content-type': 'application/json' };

    return this.http.put(this.url + 'profile/uptadeprofile', json, {
      headers,
    });
  }
  buscar(json) {
    let headers = { 'content-type': 'application/json' };

    return this.http.post(this.url + 'movies/moviebytitle', json, {
      headers,
    });
  }
}
