import {CharacterInterface} from "./character.interface";

export interface CharacterDetailInterface extends CharacterInterface{
  race: string;
  originPlanet: string;
  maxKi: string;
  description: string;
  affiliation: string
}
