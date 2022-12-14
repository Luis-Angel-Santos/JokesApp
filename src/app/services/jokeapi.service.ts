import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get<Jokes>(`https://v2.jokeapi.dev/joke/${category}?lang=${idioma}&type=twopart&amount=9`);
  }

}
