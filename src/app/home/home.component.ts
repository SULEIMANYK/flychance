import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 
   })
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [] 
})
export class HomeComponent implements OnInit {
  constructor() {
  
    // customize default values of carousels used by this component tree
   
   
    
  }
 // Read all REST Items

// Rest Items Service: Read all REST Items


ngOnInit() {

}


}
