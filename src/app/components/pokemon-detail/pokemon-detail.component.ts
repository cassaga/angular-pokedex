import { Component, Input } from '@angular/core';
import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {
  @Input() pokemon: Pokemon | null = null;

  showModal = true;

  openModal(pokemon: Pokemon) {
    this.pokemon = pokemon;
    this.showModal = true;

  }

  closeModal() {
   this.showModal = false;
  }

}
