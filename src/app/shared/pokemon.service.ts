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
    // a fix pour le local storage
    // let pokemonData = localStorage.getItem("listPokemon")
    // return pokemonData ? JSON.parse(pokemonData) : POKEMONS
    return POKEMONS
  }
}
