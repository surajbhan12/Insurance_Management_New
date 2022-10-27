import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-adminquery',
  templateUrl: './adminquery.component.html',
  styleUrls: ['./adminquery.component.css']
})
export class AdminqueryComponent implements OnInit {
  questions:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
    let resp=this.service.getQuestions();
    resp.subscribe((data:any)=>this.questions=data);
  }
  public back(){
    this.route.navigate(['/admindashboard']);
  }
  public addAnswer(){
    this.route.navigate(['/addanswer']);
  }

}
