import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ServiceModule } from './service/service.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
