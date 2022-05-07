import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyRegistrationServiceService } from 'src/app/services/company-registration-service.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyForm = new FormGroup({
    airlineName: new FormControl(''),
    address: new FormControl(''),
    contact: new FormControl(''),}
  );


  constructor(private companyRegistrationServiceService: CompanyRegistrationServiceService) { }

  successMessage : string="";
  added: boolean = false;

  ngOnInit(): void {
  }

  addCompany(){
   this.companyRegistrationServiceService.addCompany();
   promise.subscribe(data=>this.displaySucccessMessage());
    
  }
  displaySucccessMessage(){
    this.successMessage = "Airline was added successfully";
    this.added = true;
    setTimeout(()=>{
      this.router.navigateByUrl("/adminhome")
    },3000)
  }

}
