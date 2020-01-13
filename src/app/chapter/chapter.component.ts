import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerConnectService } from '../server-connect.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  private id;
  private sections=[[],[],[],[],[],[],[],[],[]];

  constructor(private activatedRoute:ActivatedRoute,private server: ServerConnectService) { }

  ngOnInit() {
    try{
    this.activatedRoute.firstChild.params.subscribe(
       (params: any) => {
            this.server.getWorkPage(params['num'])
                .subscribe((data: any) => {
                  this.sections = data;
                });
            console.log(params)
       }
    );
    }
    catch(e){this.goBack();}

}

goBack(){
  console.log("bug")
}

}