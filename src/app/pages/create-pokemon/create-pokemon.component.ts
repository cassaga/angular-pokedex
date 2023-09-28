import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PokedexService } from '../../shared/pokemon.service';
import { Pokemon } from '../../shared/pokemon.model';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
})
export class CreatePokemonPageComponent {

  pokemonForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private pokedexService: PokedexService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.pokemonForm.valid) {
      const newPokemon = new Pokemon(
        this.pokemonForm.value.name,
        this.pokemonForm.value.imageUrl,
        this.pokemonForm.value.description,
      );
      this.pokedexService.addPokemon(newPokemon);
      this.router.navigate(['/']);
    }
  }
}
