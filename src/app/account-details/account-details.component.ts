import { Component, OnInit } from '@angular/core';
import { AccountDetails } from './account-details.model';
import { dataArray } from 'src/assets/data';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {

  accountDetails: any;

  constructor() { }

  ngOnInit(): void {
    this.accountDetails = {};
    this.accountDetails =  dataArray[0].accountData; // reading of data from json and initializing list
  }
}