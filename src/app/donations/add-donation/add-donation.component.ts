import { Component, OnInit } from '@angular/core';

import { CausesService } from '../../services/causes.service';

@Component({
  selector: 'app-add-donation',
  templateUrl: './add-donation.component.html',
  styleUrls: ['./add-donation.component.scss']
})
export class AddDonationComponent implements OnInit {
  causes;

  constructor(private _causesService:CausesService) { }

  ngOnInit() {
    this._causesService.getCauses().subscribe(data=>{
      console.log(data);
      this.causes = data;
    })

  }

}
