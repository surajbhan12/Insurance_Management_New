import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/Questions';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-addquery',
  templateUrl: './addquery.component.html',
  styleUrls: ['./addquery.component.css']
})
export class AddqueryComponent implements OnInit {
questions:Questions=new Questions();
message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
 public addquery(){
  let resp=this.service.addQuery(this.questions);
  resp.subscribe((data:any)=>this.message=data);
  alert("Question added");
  this.route.navigate(['/userquery']);
 }
 public logout(){
  let resp=this.service.logout();
  resp.subscribe((data:any)=>this.message=data);
  alert("Logout SuccessFully");
  this.route.navigate(['/user']);
}
}
