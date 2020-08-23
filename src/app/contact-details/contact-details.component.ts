import { Component, OnInit, Renderer2, NgZone } from '@angular/core';
import { ContactDetails } from './contact-details.model';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  // Declaration and initialization of variables
  contactDetailsList: ContactDetails[] = [];
  actualContactDetailsList: ContactDetails[] = [];
  lastScrollTop: number = 0;
  direction: string = "";
  assignDataToCard: ContactDetails[] = [];
  isIndexSelected;
  searchParam: string = '';

  // For lazy loading - scroll event mapping
  constructor(lc: NgZone) {
    // onScroll event of window
    window.onscroll = () => {
      let st = window.pageYOffset;
      let dir = '';
      if (st > this.lastScrollTop) {
        dir = "down";
      } else {
        dir = "up";
      }
      this.lastScrollTop = st;
      lc.run(() => {
        this.direction = dir;
        if (st > this.lastScrollTop + 10) {
          this.onDownScrollEvent();
        }
        this.onDownScrollEvent();
      });
    };
  }

  ngOnInit(): void {
    this.getData();
  }

  // Creating static data for contact list with 100 records
  getData() {
    for (let index = 0; index < 100; index++) {
      let contactDtl = new ContactDetails();
      contactDtl.id = index;
      contactDtl.name = "Employee Name " + index;
      contactDtl.email = "emp" + index + "email@comp.com"
      contactDtl.empId = index;
      contactDtl.contactNo = "12345678" + index;
      if (index >= 0 && index <= 5) {
        contactDtl.jobTitle = "Senior Enginner";
      } else if (index > 5 && index <= 20) {
        contactDtl.jobTitle = "Power Engineer";
      } else if (index > 20 && index <= 50) {
        contactDtl.jobTitle = "Operative Purchase";
      } else {
        contactDtl.jobTitle = "Engineer";
      }
      if (index <= 11)
        this.assignDataToCard.push(contactDtl);
      this.contactDetailsList.push(contactDtl);
    }
    this.actualContactDetailsList = this.contactDetailsList;
  }

  // lazy load logic implimentation
  onDownScrollEvent(): void {
    if (this.assignDataToCard.length < this.actualContactDetailsList.length) {
      const a = this.assignDataToCard.length;
      for (let index = this.assignDataToCard.length; index < a + 4; index++) {
        if (index <= this.actualContactDetailsList.length)
          this.assignDataToCard.push(this.actualContactDetailsList[index]);
      }
    }
  }

  // To display data
  onClickRevel(index) {
    this.isIndexSelected = index;
  }

  // Search logic implimentation
  searchData(event) {  
    // search after user input size is greater than 3 characters
    if (this.searchParam.length > 3) {
      this.actualContactDetailsList = [];
      this.contactDetailsList.forEach(element => {
        const name = element.name.toLowerCase();  // convert name to lowercase to match search string
        const jobTitle = element.jobTitle.toLowerCase(); // convert jobTitle to lowercase to match search string
        const searchStr = this.searchParam.toLowerCase(); // convert to lowercase
        if (name.includes(searchStr) || jobTitle.includes(searchStr)) {
          this.actualContactDetailsList.push(element);
        }
      });
      this.assignDataToCard = this.actualContactDetailsList;
    } else {
      this.assignDataToCard = this.contactDetailsList; // to Reinitialize list with original contact List
    }
  }
}