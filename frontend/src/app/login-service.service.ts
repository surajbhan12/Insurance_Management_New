import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }
  //Registration
  public userRegistration(user:any){
    return this.http.post("http://localhost:8083/user/register",user,{responseType:'text' as 'json'})
  }
  public adminRegistration(user:any){
    return this.http.post("http://localhost:8083/admin/register",user,{responseType:'text' as 'json'})
  }
//Login
  public userLogin(user:any){
    return this.http.post("http://localhost:8083/login",user,{responseType:'text' as 'json'})
  }
  public adminLogin(user:any){
    return this.http.post("http://localhost:8083/adminlogin",user,{responseType:'text' as 'json'})
  }

  //passwordupdate
  public adminUpdate(user:any){
    return this.http.post("http://localhost:8083/updateAdmin",user,{responseType:'text' as 'json'})
  }
  public userUpdate(user:any){
    return this.http.post("http://localhost:8083/updateUser",user,{responseType:'text' as 'json'})
  }

  //User record update
  public updateUser(user:any){
    return this.http.post("http://localhost:8083/user/update",user,{responseType:'text' as 'json'})
  }

  //policy
  public getpolicy(){
    return this.http.get("http://localhost:8083/policies");
  }

  public addPolicy(policy:any){
    return this.http.post("http://localhost:8083/admin/addPolicy",policy);
  }

  public deletePolicy(policyno:any){
    return  this.http.delete("http://localhost:8083/admin/deletePolicy/"+policyno);
  }
  public applyPolicy(policyno:any){
    return  this.http.get("http://localhost:8083/policyregister/"+policyno);
  }


  //Record
  public getRecord(){
    return this.http.get("http://localhost:8083/getrecord");
  }
  public getuserRecord(){
    return this.http.get("http://localhost:8083/customer/record");
  }
  public approveRecord(recordno:any){
    return  this.http.get("http://localhost:8083/approved/"+recordno);
  }
  public disapproveRecord(recordno:any){
    return  this.http.get("http://localhost:8083/disapproved/"+recordno);
  }
          


  //Questions
  public getQuestions(){
    return this.http.get("http://localhost:8083/getquestion");
  }
  public answerQuery(questions:any){
    return this.http.post("http://localhost:8083/updateAnswer",questions);
  }
  public addQuery(questions:any){
    return this.http.post("http://localhost:8083/addQuestion",questions,{responseType:'text' as 'json'})
  }


  //logout
  public logout(){
    return this.http.get("http://localhost:8083/getquestion");
  }

     
}
