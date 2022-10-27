import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-adminpasswordupdate',
  templateUrl: './adminpasswordupdate.component.html',
  styleUrls: ['./adminpasswordupdate.component.css']
})
export class AdminpasswordupdateComponent implements OnInit {
  user:User=new User();
  message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public updateAdminPassword(){
    let resp=this.service.adminUpdate(this.user);
    resp.subscribe((data:any)=>this.message=data);
    alert("Password Updated ");
    this.route.navigate(['/admin']);
  }
}
