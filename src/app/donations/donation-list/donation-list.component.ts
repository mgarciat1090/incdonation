import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {

  constructor(private http:HttpClient) { }
  donations;

  ngOnInit() {

  	this.http.get(environment.apiUrl + '/donations').subscribe(data =>{
  		console.log(data);
  		this.donations = data;
  	})

  }

}
