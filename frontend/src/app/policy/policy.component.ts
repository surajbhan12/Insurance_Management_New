import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.css']
})
export class PolicyComponent implements OnInit {
  policies:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getpolicy();
    resp.subscribe((data:any)=>this.policies=data);

  }
  public back(){
    this.route.navigate(['/admindashboard']);
  }
  public clickAdd(){
    this.route.navigate(['/addpolicy']);
  }
  public deletePolicy(id:number){
    let resp=this.service.deletePolicy(id);
    resp.subscribe((data:any)=>this.policies=data);
  }
  

}
