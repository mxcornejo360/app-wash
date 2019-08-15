import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { HeaderComponent } from "./header/header.component";
import { SlideHomeComponent } from "./slide-home/slide-home.component";
import { FooterComponent } from "./footer/footer.component";
import { MenuComponent } from "./menu/menu.component";



@NgModule({
  declarations: [
    HeaderComponent,
    SlideHomeComponent,
    FooterComponent,
    MenuComponent
  ],
  exports:[
    HeaderComponent,
    SlideHomeComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
