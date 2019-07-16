import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ICause } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class CausesService {

	private causesUrl = environment.apiUrl + '/causes';

  constructor(private http:HttpClient) { }

  getCauses():Observable<ICause>{
  	return this.http.get<ICause>(this.causesUrl);
  }
}
