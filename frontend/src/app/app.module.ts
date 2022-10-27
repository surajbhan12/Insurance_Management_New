import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { LoginServiceService } from './login-service.service';
import { PolicyComponent } from './policy/policy.component';
import { AddpolicyComponent } from './addpolicy/addpolicy.component';
import { AdminrecordComponent } from './adminrecord/adminrecord.component';
import { AdminqueryComponent } from './adminquery/adminquery.component';
import { AdminpasswordupdateComponent } from './adminpasswordupdate/adminpasswordupdate.component';
import { AnswerqueryComponent } from './answerquery/answerquery.component';
import { UserpolicyComponent } from './userpolicy/userpolicy.component';
import { UserrecordComponent } from './userrecord/userrecord.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { UserpasswordupdateComponent } from './userpasswordupdate/userpasswordupdate.component';
import { AddqueryComponent } from './addquery/addquery.component';
import { UserupdateComponent } from './userupdate/userupdate.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PolicyCategoryComponent } from './policy-category/policy-category.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    UserDasboardComponent,
    AdminDashboardComponent,
    UserRegisterComponent,
    AdminregisterComponent,
    PolicyComponent,
    AddpolicyComponent,
    AdminrecordComponent,
    AdminqueryComponent,
    AdminpasswordupdateComponent,
    AnswerqueryComponent,
    UserpolicyComponent,
    UserrecordComponent,
    UserqueryComponent,
    UserpasswordupdateComponent,
    AddqueryComponent,
    UserupdateComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    PolicyCategoryComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
