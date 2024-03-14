import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CharacterService} from "../../../services/character.service";
import {CharacterInterface} from "../../../interfaces/character.interface";
import {async, lastValueFrom} from "rxjs";
import {CharacterDetailInterface} from "../../../interfaces/character-detail.interface";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [CharacterService]
})
export class ListComponent {
  characters: CharacterInterface[] | undefined;
  visibleModal = false;
  characterSelect: CharacterDetailInterface | undefined;

  constructor(private characterService: CharacterService) {
  }

  async ngOnInit() {
    await lastValueFrom(this.characterService.getCharacters())
      .then(value => {
        this.characters = value;
      })
  }

  async openCharacter(character: CharacterInterface) {
    await lastValueFrom(this.characterService.getCharacterById(character.id))
      .then(value => {
        this.characterSelect = value
      })
    console.log('c', this.characterSelect);
    this.visibleModal = true;
  }
}
