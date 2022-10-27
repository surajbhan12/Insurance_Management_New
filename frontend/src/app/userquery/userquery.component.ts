import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-userquery',
  templateUrl: './userquery.component.html',
  styleUrls: ['./userquery.component.css']
})
export class UserqueryComponent implements OnInit {
questions:any;
message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getQuestions();
    resp.subscribe((data:any)=>this.questions=data);
  }
  public back(){
    this.route.navigate(['/userdashboard']);
  }
  public addQuery(){
    this.route.navigate(['/addquery']);
  }
  public logout(){
    let resp=this.service.logout();
    resp.subscribe((data:any)=>this.message=data);
    alert("Logout SuccessFully");
    this.route.navigate(['/user']);
  }

}
