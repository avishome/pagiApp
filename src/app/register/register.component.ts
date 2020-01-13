import { Component, OnInit } from '@angular/core';
import { ServerConnectService } from '../server-connect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public echo = "";
  constructor(private server: ServerConnectService,private router:Router) { }
  nextpage(){
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }
  loginF(user,pass,fname,lname){
  this.server.register(user.value,pass.value,fname.value,lname.value).subscribe(
    (data : any)=>{
      console.log(data);
      if(data.secsess){
        this.echo = "You redirect";
        this.nextpage();
      }
      else this.echo = "Login Fail";
      }
    )
  }
}