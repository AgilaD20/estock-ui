import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyDetailsComponent } from './company-details/company-details/company-details.component';
import { HeaderComponent } from './header/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyRegistrationServiceService } from './services/company-registration-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [CompanyRegistrationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
