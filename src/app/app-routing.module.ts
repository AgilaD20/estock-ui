import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details/company-details.component';
import { HomepageComponent } from './Homepage/homepage/homepage.component';

const routes: Routes = [{ path: '', component: HomepageComponent },{path:"showcompany",component:CompanyDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
