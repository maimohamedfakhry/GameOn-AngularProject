import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurexpertiseComponent } from './ourexpertise/ourexpertise.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurteamComponent,
    OurexpertiseComponent,
    JoinusComponent,
    ContactsComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
