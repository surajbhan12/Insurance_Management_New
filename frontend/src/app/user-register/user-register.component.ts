import { Component, OnInit } from '@angular/core';
import { User } from 'src/User';
import { LoginServiceService } from '../login-service.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  user:User=new User();
  message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public userRegister(){
    let resp=this.service.userRegistration(this.user);
    resp.subscribe((data:any)=>this.message=data);
    alert("Registered SuccessFully");
    this.route.navigate(['/user']);
  }
  
}
