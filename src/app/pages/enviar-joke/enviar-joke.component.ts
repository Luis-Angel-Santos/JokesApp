import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JokeapiService } from 'src/app/services/jokeapi.service';

@Component({
  selector: 'app-enviar-joke',
  templateUrl: './enviar-joke.component.html',
  styleUrls: ['./enviar-joke.component.css']
})
export class EnviarJokeComponent implements OnInit{

  public joke!: FormGroup;

  private buildForm() {
    this.joke = this.formBuilder.group({
      categoria: '',
      idioma: '',
      joke: '',
      respuestaJoke: ''
    });
  }

  enviarJoke(){
    var categoria = this.joke.value['categoria'];
    var idioma = this.joke.value['idioma'];
    var joke = this.joke.value['joke'];
    var respuestaJoke = this.joke.value['respuestaJoke'];
    this.jokeApiService.postJoke(joke, idioma, respuestaJoke, categoria);
    
  }

  constructor(private jokeApiService: JokeapiService,
              private formBuilder: FormBuilder) { }
  
  ngOnInit(): void { 
    this.buildForm();
   }

}
