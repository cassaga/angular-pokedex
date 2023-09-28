import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @Input() pokemons: Pokemon[] = [];
  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  onSelect(pokemon: Pokemon): void {
    this.pokemonSelected.emit(pokemon);
  }
}
