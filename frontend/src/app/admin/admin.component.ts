import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user:User=new User();
  showUser !:boolean
  message:any
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  public loginNow(){
    let resp=this.service.adminLogin(this.user);
    resp.subscribe((data:any)=>this.message=data);
    if(this.message.match('wrong Credentials')){
      this.showUser=false;
    }else{
      this.route.navigate(['/admindashboard']);
      this.showUser=true;
    }
  }

}
