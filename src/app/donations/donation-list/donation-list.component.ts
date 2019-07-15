import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DonationsService } from '../../services/donations.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {

  constructor(private _donationsService:DonationsService) { }
  donations;

  ngOnInit() {

    this._donationsService.getDonations().subscribe(data=>{
      this.donations = data;
    })

  }

}
