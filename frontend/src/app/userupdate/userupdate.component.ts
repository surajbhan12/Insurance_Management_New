import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {
user:User=new User();
message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public userupdate(){
    let resp=this.service.updateUser(this.user);
    resp.subscribe((data:any)=>this.message=data);
    alert("User Record Updated ");
    this.route.navigate(['/userdashboard']);
  }
    public logout(){
      let resp=this.service.logout();
      resp.subscribe((data:any)=>this.message=data);
      alert("Logout SuccessFully");
      this.route.navigate(['/user']);
    }
  }

