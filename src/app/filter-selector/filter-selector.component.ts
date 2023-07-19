import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css'],
})
export class FilterSelectorComponent implements OnInit {
  [x: string]: any;
  @Input() dataUser = [];
  @Output() filteredData = new EventEmitter<any[]>();
  selectedType: string;

  ngOnInit() {
    this.onFilter();
  }

  onFilter() {
    console.log('Filter function triggered');
    console.log('Selected type:', this.selectedType);
    let filteredUsers;

    switch (this.selectedType) {
      case 'title':
        filteredUsers = this.dataUser.filter((e) => e.name.title);
        break;
      case 'first':
        filteredUsers = this.dataUser.filter((e) => e.name.first);
        break;
      case 'last':
        filteredUsers = this.dataUser.filter((e) => e.name.last);
        break;
      default:
        filteredUsers = this.dataUser;
    }
    console.log('Filtered users:', filteredUsers);
    this.filteredData.emit(filteredUsers);
  }
}

//Imaginons que tu aies une grande boîte pleine de jouets (c'est ta `dataUser`). Certains de ces jouets sont des voitures, d'autres sont des poupées, et d'autres encore sont des ballons. Un jour, tu décides de ne jouer qu'avec certains types de jouets. Pour cela, tu as conçu un filtre super cool (c'est `onFilter()`).

// 1. `import { ThisReceiver } from '@angular/compiler';` :
// Ici, tu as pris certains outils dont tu pourrais avoir besoin pour construire ton filtre.

// 2. `@Input() dataUser = [];` :
// Voici ta grande boîte de jouets.

// 3. `selectedType: string;` :
// C'est là que tu décides quel type de jouet tu veux jouer aujourd'hui. Peut-être que tu veux seulement jouer avec les voitures (title), ou peut-être que tu veux jouer avec les poupées (first), ou peut-être les ballons (last).

// 4. `ngOnInit() {console.log(this.dataUser)}` :
// Avant de commencer à jouer, tu vérifies que tous tes jouets sont bien dans la boîte.

// 5. `onFilter() {...}` :
// C'est là que la magie se produit. Tu regardes quel type de jouet tu as décidé de jouer (`this.selectedType`) et tu utilises ton filtre super cool pour ne garder que ces jouets dans la boîte.

// Si tu as choisi de jouer avec les voitures, ton filtre va retirer toutes les poupées et tous les ballons et ne te laisser que les voitures. De même, si tu as choisi de jouer avec les poupées, ton filtre va retirer toutes les voitures et tous les ballons. Et si tu ne choisis pas de type spécifique, tu peux jouer avec tous tes jouets.

// Ainsi, ce code t'aide à choisir avec quels jouets tu veux jouer à partir de ta grande boîte de jouets.
