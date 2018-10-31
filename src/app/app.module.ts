import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent }from './loginscreen/login.component';
 import { MatInputModule,MatFormFieldModule} from '@angular/material';
 import {MatIconModule,MatCardModule} from '@angular/material';
 import { RouterModule, Routes } from '@angular/router';
 import { HttpModule } from '@angular/http';
 import { HttpClientModule } from '@angular/common/http';
//  import {LoginComponent2} from './login2.component'
 import {DashboardComponent} from './Dashboard/dashboard.component';
 import {IncidentComponent} from './Incidenttab/incidenttab.component';
 import {LoginService} from './services/login.services';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    IncidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule, 
    MatCardModule
    
  ],
  providers: [MatInputModule,MatFormFieldModule,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
