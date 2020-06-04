import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import { OurexpertiseComponent } from './ourexpertise/ourexpertise.component';
import { JoinusComponent } from './joinus/joinus.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'our team', component: OurteamComponent },
  { path: 'our expertise', component: OurexpertiseComponent },
  { path: 'join us', component: JoinusComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
