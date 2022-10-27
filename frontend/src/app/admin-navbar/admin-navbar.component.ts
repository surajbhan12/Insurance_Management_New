import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {
message:any;
constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public logout(){
    let resp=this.service.logout();
    resp.subscribe((data:any)=>this.message=data);
    alert("Logout SuccessFully");
    this.route.navigate(['/admin']);
  }

}
