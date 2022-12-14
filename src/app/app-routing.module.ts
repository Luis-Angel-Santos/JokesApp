import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnviarJokeComponent } from './pages/enviar-joke/enviar-joke.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'enviarJoke',
    component: EnviarJokeComponent,
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
