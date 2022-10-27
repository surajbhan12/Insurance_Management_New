import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-userrecord',
  templateUrl: './userrecord.component.html',
  styleUrls: ['./userrecord.component.css']
})
export class UserrecordComponent implements OnInit {
records:any;
message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getuserRecord();
    resp.subscribe((data:any)=>this.records=data);
  }
  public back(){
    this.route.navigate(['/userdashboard']);
  }
  public logout(){
    let resp=this.service.logout();
    resp.subscribe((data:any)=>this.message=data);
    alert("Logout SuccessFully");
    this.route.navigate(['/user']);
  }
}
