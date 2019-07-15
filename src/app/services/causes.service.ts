import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CausesService {

	private causesUrl = environment.apiUrl + '/causes';

  constructor(private http:HttpClient) { }

  getCauses():Observable{
  	return this.http.get(this.causesUrl);
  }
}
