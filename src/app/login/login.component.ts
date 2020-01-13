import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConnectService } from '../server-connect.service';
import {Login} from '../login';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public echo = "";
  constructor(private router:Router, private server: ServerConnectService, private cookieService: CookieService) { }
  nextpage(){
    this.router.navigate(['/selectWorkPage']);
  }
  loginF(user,pass){
  this.server.login(user.value,pass.value).subscribe(
    (data: Login)=>{
      
      console.log(data);
      if(data.secsess){
        this.echo = "You redirect";
        this.cookieService.set("Token",data.token);
        this.nextpage();
      }
      else this.echo = "Login Fail";
      }
    )
  }
  ngOnInit() {
  }

}