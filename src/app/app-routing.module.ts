import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokedexPageComponent} from "./pages/pokedex/pokedex.component";
import {CreatePokemonPageComponent} from "./pages/create-pokemon/create-pokemon.component";
import {PokemonDetailComponent} from "./components/pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  { path: '', component: PokedexPageComponent },
  { path: 'create', component: CreatePokemonPageComponent },
  { path: ':name' , component: PokemonDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule {









}
