import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
