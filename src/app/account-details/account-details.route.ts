import { Routes } from '@angular/router';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { AccountDetailsComponent } from './account-details.component';

export const contactRoute: Routes = [
  {
    path: 'contactDetail',
    component: ContactDetailsComponent
  },
  {
    path: '**',
    component: AccountDetailsComponent
  },
  {
    path: '',
    component: AccountDetailsComponent
  }
];