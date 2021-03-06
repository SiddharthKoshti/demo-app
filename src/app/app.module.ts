import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { contactRoute } from './account-details/account-details.route';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
   AccountDetailsComponent,
   ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forChild(contactRoute)
  ],schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
