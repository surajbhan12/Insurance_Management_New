import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpolicyComponent } from './addpolicy/addpolicy.component';
import { AddqueryComponent } from './addquery/addquery.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpasswordupdateComponent } from './adminpasswordupdate/adminpasswordupdate.component';
import { AdminqueryComponent } from './adminquery/adminquery.component';
import { AdminrecordComponent } from './adminrecord/adminrecord.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AnswerqueryComponent } from './answerquery/answerquery.component';
import { HomeComponent } from './home/home.component';
import { PolicyComponent } from './policy/policy.component';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserComponent } from './user/user.component';
import { UserpasswordupdateComponent } from './userpasswordupdate/userpasswordupdate.component';
import { UserpolicyComponent } from './userpolicy/userpolicy.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { UserrecordComponent } from './userrecord/userrecord.component';
import { UserupdateComponent } from './userupdate/userupdate.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'user',component:UserComponent},
  {path:'user/admin',component:AdminComponent},
  {path:'admin/user',component:UserComponent},
  {path:'updateuser',component:UserupdateComponent},
  {path:'userpolicy',component:UserpolicyComponent},
  {path:'userquery',component:UserqueryComponent},
  {path:'userrecord',component:UserrecordComponent},
  {path:'policy',component:PolicyComponent},
  {path:'addpolicy',component:AddpolicyComponent},
  {path:'updaterecord',component:AdminrecordComponent},
  {path:'updatequery',component:AdminqueryComponent},
  {path:'addquery',component:AddqueryComponent},
  {path:'addanswer',component:AnswerqueryComponent},
  {path:'userpassword',component:UserpasswordupdateComponent},
  {path:'adminpassword',component:AdminpasswordupdateComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'userdashboard',component:UserDasboardComponent},
  {path:'user/userregister',component:UserRegisterComponent},
  {path:'admin/adminregister',component:AdminregisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
