import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layouts/navbar/navbar.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { HeaderComponent } from './core/layouts/header/header.component';
import { HomeComponent } from './views/public/home/home.component';
import { AboutComponent } from './views/public/about/about.component';
import { ServicesComponent } from './views/public/services/services.component';
import { AdvancedSearchComponent } from './views/public/advanced-search/advanced-search.component';
import { PartenairesComponent } from './views/public/partenaires/partenaires.component';
import { FaqComponent } from './views/public/faq/faq.component';
import { AbonnementsComponent } from './views/public/abonnements/abonnements.component';
import { ContactComponent } from './views/public/contact/contact.component';
import {CategoriesComponent} from './views/public/categories/categories.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, FooterComponent, NavbarComponent, HomeComponent,
     AboutComponent, ServicesComponent, AdvancedSearchComponent, PartenairesComponent,
      FaqComponent, AbonnementsComponent, ContactComponent, CategoriesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
