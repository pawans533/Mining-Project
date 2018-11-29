import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import {HttpErrorHandler} from './http-error-handler.service';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { OrganizationComponent } from './organization/organization.component';
import {NotificationService} from './notification.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  providers: [
  NotificationService,
  HttpErrorHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
