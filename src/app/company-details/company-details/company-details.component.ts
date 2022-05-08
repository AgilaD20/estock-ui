import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { companyDetails } from 'src/app/models/companyDetails';
import { CompanyService } from 'src/app/services/company-service.service';
import { SelectedDataService } from 'src/app/services/selected-data.service';

class PeriodicElement{
  position: number=0;
  name: String="";
  weight: number=0.0;
  symbol:String="";

}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {


  companyDetails : companyDetails = new companyDetails;
 
  constructor(private companyService: CompanyService, private selectedDataService : SelectedDataService) { }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  ngOnInit(): void {
    this.selectedDataService.currentlySelectedCompany.subscribe(data=>{
      this.setCompanyDetails(data);
    })
  }

  setCompanyDetails(companyDetails : companyDetails){
    this.companyDetails=companyDetails;
    console.log(this.companyDetails);
  }

  

}
