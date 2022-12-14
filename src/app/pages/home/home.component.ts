import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Joke } from 'src/app/models/jokes.model';
import { JokeapiService } from 'src/app/services/jokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  jokeList: Joke[] = [];
  jokeByCategory: Joke[] = [];
  public categoria!: FormGroup;

  private buildForm() {
    this.categoria = this.formBuilder.group({
      categoriaJoke: '',
    });
  }

  elegirCategoria(){
    var categoria = this.categoria.value['categoriaJoke'];
    this.jokeApiService.getJokesByCategory(categoria)
      .subscribe((jokes) => {
        this.jokeByCategory = jokes.jokes;
    });

  }

  constructor(private jokeApiService: JokeapiService,
              private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.buildForm();
    this.jokeApiService.getAllJokes()
      .subscribe((jokes) => {
        this.jokeList = jokes.jokes;
        console.log(this.jokeList);
    });
  }

}