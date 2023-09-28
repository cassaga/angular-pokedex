import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
})
export class PokemonDetailComponent {
  @Input() pokemon: Pokemon | null = null;
}
