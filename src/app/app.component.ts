import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @Output() searchTermChange = new EventEmitter<string>();
  searchTerm: string; // Ajoutez ceci
  data: any[];
  selectedType: string;
  filteredData: any[];
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getUsersData();
    this.filteredData = this.data;
  }

  onFilterApplied(filteredData) {
    console.log('Filtered data received:', filteredData);
    this.filteredData = filteredData;
  }

  onSearchTermChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterData();
  }

  filterData() {
    this.filteredData = this.data;
    if (this.selectedType) {
      this.filteredData = this.filteredData.filter(e => e.name[this.selectedType]);
    }
    if (this.searchTerm) {
      this.filteredData = this.filteredData.filter(e => e.name.first.includes(this.searchTerm) || e.name.last.includes(this.searchTerm));
    }
  }
}
