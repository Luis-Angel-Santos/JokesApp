import { Component, OnInit } from '@angular/core';
import { Joke } from 'src/app/models/jokes.model';
import { JokeapiService } from 'src/app/services/jokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  jokeList: Joke[] = []

  constructor(private jokeApiService: JokeapiService) { }
  
  ngOnInit(): void {
    this.jokeApiService.getAllJokes()
      .subscribe((jokes) => {
        this.jokeList = jokes.jokes;
        console.log(this.jokeList);
    });
    
  }

}