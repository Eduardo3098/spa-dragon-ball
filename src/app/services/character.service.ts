import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CharacterInterface} from "../interfaces/character.interface";
import {CharacterDetailInterface} from "../interfaces/character-detail.interface";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  apiUrl = 'http://localhost:8082/characters';
  constructor(private httpClient: HttpClient) { }

  getCharacters(page=1) {
    return this.httpClient.get<CharacterInterface[]>(this.apiUrl+`?page=${page}`);
  }

  getCharacterById(id:number) {
    return this.httpClient.get<CharacterDetailInterface>(this.apiUrl+`/${id}`);
  }
}
