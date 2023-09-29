import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { POKEMONS } from './pokemons-mock';

@Injectable({ providedIn: 'root' })
export class PokedexService {
  private pokemons: Pokemon[] = this.getData();

  getPokemons(): Pokemon[] {
    return this.pokemons;
  }

  addPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
    console.log(this.pokemons)
    //localStorage.setItem("listPokemon", JSON.stringify(this.pokemons))
  }

  getData(){
    // a fix plus tard  pour gerer  le local storage et garder les pokemons enregistrés
    // let pokemonData = localStorage.getItem("listPokemon")
    // return pokemonData ? JSON.parse(pokemonData) : POKEMONS
    return POKEMONS
  }
}
