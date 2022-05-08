import { Component, OnInit } from '@angular/core';
import { companyDetails } from 'src/app/models/companyDetails';
import { CompanyService } from 'src/app/services/company-service.service';
import { Router } from '@angular/router';
import { SelectedDataService } from 'src/app/services/selected-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  companycode: String="";
  companyDetails : companyDetails | undefined;
  noCompany: Boolean=false;

  constructor(private companyService: CompanyService,private router: Router,private selectedService: SelectedDataService) { }

  ngOnInit(): void {
  }

  searchCompany(){
    const promise = this.companyService.getCompany(this.companycode)
    promise.subscribe(data => {
      this.setCompanyDetails(data);
    },
    error=>{this.noCompany=true;})

  }
  setCompanyDetails(data: companyDetails) {
    this.companyDetails = data;
    this.selectedService.updateSelectedCompany(this.companyDetails);

    this.router.navigateByUrl("/showcompany");

  }

}
