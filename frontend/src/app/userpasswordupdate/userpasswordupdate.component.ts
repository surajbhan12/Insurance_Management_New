import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-userpasswordupdate',
  templateUrl: './userpasswordupdate.component.html',
  styleUrls: ['./userpasswordupdate.component.css']
})
export class UserpasswordupdateComponent implements OnInit {
  user:User=new User();
  message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public updateUserPassword(){
    let resp=this.service.userUpdate(this.user);
    resp.subscribe((data:any)=>this.message=data);
    alert("Password Updated ");
    this.route.navigate(['/user']);
  }
  public logout(){
    let resp=this.service.logout();
    resp.subscribe((data:any)=>this.message=data);
    alert("Logout SuccessFully");
    this.route.navigate(['/user']);
  }
}
