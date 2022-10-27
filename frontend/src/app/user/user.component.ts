import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User=new User();
  showUser !:boolean
  message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public loginNow(){
    let resp=this.service.userLogin(this.user);
    resp.subscribe((data:any)=>this.message=data);
    if(this.message.match('wrong Credentials')){
      this.showUser=false;
    }else{
      this.route.navigate(['/userdashboard']);
      this.showUser=true;
    }
  }

}
