import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-user-dasboard',
  templateUrl: './user-dasboard.component.html',
  styleUrls: ['./user-dasboard.component.css']
})
export class UserDasboardComponent implements OnInit {
  message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public logout(){
    let resp=this.service.logout();
    resp.subscribe((data:any)=>this.message=data);
    alert("Logout SuccessFully");
    this.route.navigate(['/user']);
  }
}
