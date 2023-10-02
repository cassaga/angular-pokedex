import { Pokemon } from '../../shared/pokemon.model';
import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';

import {PokemonDetailComponent} from "../pokemon-detail/pokemon-detail.component";


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @ViewChild(PokemonDetailComponent) detailComponent!: PokemonDetailComponent;
  @Output() pokemonSelected = new EventEmitter<Pokemon>();
  @Input() pokemons: Pokemon[] = [];

  selectPokemon(pokemon: Pokemon): void {
    this.pokemonSelected.emit(pokemon);
  }
}
