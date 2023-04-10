import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/public/contact/contact.component';
import { FaqComponent } from './views/public/faq/faq.component';
import { ServicesComponent } from './views/public/services/services.component';
import { AbonnementsComponent } from './views/public/abonnements/abonnements.component';
import { AboutComponent } from './views/public/about/about.component';
import { HomeComponent } from './views/public/home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"contact", component:ContactComponent},
  {path:"faq", component:FaqComponent},
  {path:"services", component:ServicesComponent},
  {path:"abonnements", component:AbonnementsComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
