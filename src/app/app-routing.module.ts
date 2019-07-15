import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationListComponent } from './donations/donation-list/donation-list.component';
import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { DonatorListComponent } from './donators/donator-list/donator-list.component';
import { MainPageComponent } from './commons/main-page/main-page.component';
import { AddDonationComponent } from './donations/add-donation/add-donation.component';

const routes: Routes = [

	{
    path: 'donations/list',
    component: DonationListComponent
  },
  {
    path: 'donations/add',
    component: AddDonationComponent
  },
  {
    path: 'lists/goals',
    component: GoalListComponent
  },
  {
    path: 'lists/donators',
    component: DonatorListComponent
  },
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
