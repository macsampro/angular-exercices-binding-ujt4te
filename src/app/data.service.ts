import { Injectable } from "@angular/core";
import { users } from "../users-data";

@Injectable()


export class DataService {
  users = users;
  constructor() {}

  getUsersData() {

    // requete API 
    return this.users;
  }
  
}


//------------------------------------------------------------------------
// import { Injectable } from "@angular/core"; 

// C'est comme si on disait "Hé, nous allons avoir besoin d'une boîte spéciale (Injectable) pour garder tous nos jouets (données) dedans!"

//------------------------------------------------------------------------

// import { users } from "../users-data"; 

//C'est comme si on disait "On a déjà une collection de jouets (utilisateurs) quelque part, alors allons les chercher."

//------------------------------------------------------------------------

// export class DataService 

//On crée une nouvelle boîte appelée "DataService" pour ranger nos jouets (données).

//------------------------------------------------------------------------

// users = users; 

//On met tous les jouets (utilisateurs) que nous avons dans la boîte.

//------------------------------------------------------------------------

// constructor() {} 

// C'est comme le moment où tu ouvres ta nouvelle boîte à jouets pour la première fois. Pour l'instant, nous n'avons rien à faire de spécial lorsque nous ouvrons la boîte, alors nous laissons cette partie vide.

//------------------------------------------------------------------------

// getUsersData() { return this.users; } 

// C'est comme si on disait "Chaque fois que quelqu'un veut voir tous les jouets (utilisateurs) dans la boîte, on leur montre."

// En gros, ce que ce code fait, c'est qu'il crée une boîte (DataService), y met tous les utilisateurs (jouets), et chaque fois que quelqu'un veut voir les utilisateurs, il leur montre.