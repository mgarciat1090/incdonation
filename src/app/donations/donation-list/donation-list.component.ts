import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {

  constructor(private http:HttpClient) { }
  donations;

  ngOnInit() {

  	this.http.get('http://localhost:3000/donations').subscribe(data =>{
  		console.log(data);
  		this.donations = data;
  	})

  }

}
