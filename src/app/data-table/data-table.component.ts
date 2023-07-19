import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  @Input() dataUser = []
  
  constructor() {}

  ngOnInit() {
  }
}


// import { Component, Input, OnInit } from '@angular/core'; 
// C'est comme si tu disais : "J'ai besoin d'un endroit (Component) pour montrer mes dessins, et je veux que tout soit prêt avant que mes amis n'arrivent (OnInit). Je veux aussi qu'ils puissent apporter leurs propres dessins s'ils le souhaitent (Input)."

// @Input() dataUser = [] 
//C'est comme si tu avais mis un grand panneau à l'entrée de ta galerie qui dit : "Amène tes dessins ici ! Je les ajouterai à ma collection (dataUser) pour les montrer à tout le monde."

//constructor() {} et ngOnInit() {} s
//ont là pour te rappeler de vérifier que tout est en ordre avant l'arrivée de tes amis. Dans ce cas, tu n'as rien de particulier à vérifier, alors ces parties sont vides.

// Donc, fondamentalement, ce code te permet de montrer à tous tes amis tous les "dessins" (dataUser) que tu as dans ta galerie d'art (DataTableComponent). Et la meilleure partie est qu'ils peuvent aussi apporter leurs propres dessins pour les montrer !