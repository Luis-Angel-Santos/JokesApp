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
  initial: boolean = false;
  public categoria!: FormGroup;

  private buildForm() {
    this.categoria = this.formBuilder.group({
      categoriaJoke: '',
      idioma: ''
    });
  }

  elegirCategoria(){
    var categoria = this.categoria.value['categoriaJoke'];
    var idiomaTrueFalse = this.categoria.value['idioma'];
    var idioma;
    if(idiomaTrueFalse == true){
      idioma = 'es';
    }else{
      idioma = 'en';
    }
    this.jokeApiService.getJokesByCategory(categoria, idioma)
      .subscribe((jokes) => {
        this.initial = true;
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