import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from 'src/Questions';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-answerquery',
  templateUrl: './answerquery.component.html',
  styleUrls: ['./answerquery.component.css']
})
export class AnswerqueryComponent implements OnInit {
  questions:Questions=new Questions();
  message:any;
  constructor(private service:LoginServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  public addAnswer(){
    let resp=this.service.answerQuery(this.questions);
    resp.subscribe((data:any)=>this.message=data);
    alert("Query answered ");
    this.route.navigate(['/updatequery']);
  }
}
