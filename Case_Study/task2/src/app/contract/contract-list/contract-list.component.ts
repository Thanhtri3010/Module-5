import {Component, OnInit} from '@angular/core';
import {ContractService} from "../../service/contract.service";
import {Contract} from "../../model/contract";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contract: Contract[] = [];
  p = 0;
  searchForm: FormGroup;


  constructor(private contractService: ContractService) {
    this.getAllContract()
  }

  ngOnInit(): void {
    this.getAllContract()
  }

  getAllContract() {
    this.contractService.getAll().subscribe(data => {
      this.contract = data;
      this.getSearchForm();
    }, error => {
      console.log(error)
    });
  }

  getSearchForm() {
    this.searchForm = new FormGroup({
      searchName: new FormControl(''),
    });
  }
  search() {
    const keySearch = this.searchForm.value.searchName;
    this.contractService.searchContract(keySearch).subscribe(data => {
        this.contract = data;
      }, error => {
        console.log(error);
      }
    );
  }
}
