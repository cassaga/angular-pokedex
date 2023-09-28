import { Component } from '@angular/core';
import { PokedexService } from '../../shared/pokemon.service';
import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexPageComponent {
  pokemons: Pokemon[] = this.pokedexService.getPokemons();
  selectedPokemon: Pokemon | null = null;

  constructor(private pokedexService: PokedexService) {}

  onSelectPokemon(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
