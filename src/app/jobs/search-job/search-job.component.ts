import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css']
})
export class SearchJobComponent implements OnInit {
  model;
  constructor() { }

  ngOnInit() {  }
searchJob(){
  console.log('test');
  
}

}
