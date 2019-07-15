import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {
	
	private donationsUrl = environment.apiUrl + '/donations';

  constructor(private http:HttpClient) { }

  getDonations():Observable{
		return this.http.get(this.donationsUrl);
	}

}
