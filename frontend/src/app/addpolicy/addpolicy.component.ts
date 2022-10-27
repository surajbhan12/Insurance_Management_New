import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from 'src/Policy';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-addpolicy',
  templateUrl: './addpolicy.component.html',
  styleUrls: ['./addpolicy.component.css']
})
export class AddpolicyComponent implements OnInit {
  policy:Policy=new Policy();
  policies:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public addPolicy(){
    let resp=this.service.addPolicy(this.policy);
    resp.subscribe((data:any)=>this.policies=data);
    alert("Policy added SuccessFully");
    this.route.navigate(['/policy']);
  }
}
