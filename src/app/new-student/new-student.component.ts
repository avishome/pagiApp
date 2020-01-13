import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerConnectService } from '../server-connect.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private server: ServerConnectService) { }
  private sections=[];
  ngOnInit() {
    try{
    this.activatedRoute.firstChild.params.subscribe(
       (params: any) => {
            this.server.share(params['num'])
                .subscribe((data: any) => {
                  this.sections = data;
                });
            console.log(params)
       }
    );
    }
    catch(e){}

  }

}