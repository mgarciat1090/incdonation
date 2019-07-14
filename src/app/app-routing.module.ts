import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationListComponent } from './donations/donation-list/donation-list.component';
import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { DonatorListComponent } from './donators/donator-list/donator-list.component';
import { MainPageComponent } from './commons/main-page/main-page.component';

const routes: Routes = [

	{
    path: 'lists/donations',
    component: DonationListComponent
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
