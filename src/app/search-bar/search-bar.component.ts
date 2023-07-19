import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  @Output() searchTermChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onSearchTermChange(value: string) {
    this.searchTermChange.emit(value);
  }
}
