import { assertPlatform, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-userpolicy',
  templateUrl: './userpolicy.component.html',
  styleUrls: ['./userpolicy.component.css']
})
export class UserpolicyComponent implements OnInit {
  policies:any;
  message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getpolicy();
    resp.subscribe((data:any)=>this.policies=data);
  }
  public Back(){
    this.route.navigate(['/userdashboard']);
  }
  public applyPolicy(id:number){
    let resp=this.service.applyPolicy(id);
    resp.subscribe((data:any)=>this.message=data);
    alert("Policy registered");
  }
  public logout(){
    let resp=this.service.logout();
    resp.subscribe((data:any)=>this.message=data);
    alert("Logout SuccessFully");
    this.route.navigate(['/user']);
  }
}
