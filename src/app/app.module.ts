import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details/company-details.component';
import { HeaderComponent } from './header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './services/company-service.service';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { SelectedDataService } from './services/selected-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    HeaderComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    FormsModule
  ],
  providers: [CompanyService,SelectedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
