import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-adminrecord',
  templateUrl: './adminrecord.component.html',
  styleUrls: ['./adminrecord.component.css']
})
export class AdminrecordComponent implements OnInit {
  records:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getRecord();
    resp.subscribe((data:any)=>this.records=data);
  }
  public back(){
    this.route.navigate(['/admindashboard']);
  }
  public approve(id:number){
    let resp=this.service.approveRecord(id);
    resp.subscribe((data:any)=>this.records=data);
  }
  public disapprove(id:number){
    let resp=this.service.disapproveRecord(id);
    resp.subscribe((data:any)=>this.records=data);
  }
}
