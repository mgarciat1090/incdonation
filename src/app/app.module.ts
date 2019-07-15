import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { DonationListComponent } from './donations/donation-list/donation-list.component';
import { MainPageComponent } from './commons/main-page/main-page.component';
import { GoalListComponent } from './goals/goal-list/goal-list.component';
import { DonatorListComponent } from './donators/donator-list/donator-list.component';
import { FooterComponent } from './commons/footer/footer.component';
import { AddDonationComponent } from './donations/add-donation/add-donation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DonationListComponent,
    MainPageComponent,
    GoalListComponent,
    DonatorListComponent,
    FooterComponent,
    AddDonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
