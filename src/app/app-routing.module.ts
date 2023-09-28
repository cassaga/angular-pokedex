import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexPageComponent} from "./pages/pokedex/pokedex.component";
import {CreatePokemonPageComponent} from "./pages/create-pokemon/create-pokemon.component";

const routes: Routes = [
  { path: '', component: PokedexPageComponent },
  { path: 'create', component: CreatePokemonPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule {









}
