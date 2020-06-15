import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BarraHorizontalComponent } from './barra-horizontal/barra-horizontal.component';



@NgModule({
  declarations: [
    NavbarComponent, BarraHorizontalComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[
    NavbarComponent, BarraHorizontalComponent
  ]
})
export class ComponentsModule { }
