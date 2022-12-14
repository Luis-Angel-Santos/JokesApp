import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Joke, Jokes } from '../models/jokes.model';

@Injectable({
  providedIn: 'root'
})
export class JokeapiService {

  constructor(private http: HttpClient) { }

  getAllJokes():Observable<Jokes>{
    return this.http.get<Jokes>('https://v2.jokeapi.dev/joke/Any?type=twopart&amount=9');
  }

  getJokesByCategory(category: string, idioma: string):Observable<Jokes>{
    Swal.close();
    return this.http.get<Jokes>(`https://v2.jokeapi.dev/joke/${category}?lang=${idioma}&type=twopart&amount=9`);
  }

  postJoke(joke: string, idioma: string, respJoke: string, category: string){
    Swal.fire({
      title: 'Joke Enviada',
      text: 'Gracias por compartirnos tu Joke. Estamos seguros de que es muy buena, la revisaremos y pronto todo el mundo la podra disfrutar',
      icon: 'success',
      confirmButtonText: 'Ok',
      confirmButtonColor: 'green'
    })
  }

}
