import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  user:User=new User();
  message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public userRegister(){
    let resp=this.service.adminRegistration(this.user);
    resp.subscribe((data:any)=>this.message=data);
    alert("Registered SuccessFully");
    this.route.navigate(['/admindashboard']);
  }
}
