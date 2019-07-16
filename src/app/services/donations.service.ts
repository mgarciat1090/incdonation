import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IDonation } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {
	
	private donationsUrl = environment.apiUrl + '/donations';

  constructor(private http:HttpClient) { }

  getDonations():Observable<IDonation>{
		return this.http.get<IDonation>(this.donationsUrl);
	}

}
