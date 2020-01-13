import { Component, OnInit, Input } from '@angular/core';
import { ServerConnectService } from '../server-connect.service';
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})

export class UnitComponent implements OnInit {
  @Input() unitId;
  @Input() edit = false;
  private data;
  constructor(private server: ServerConnectService) { }

  ngOnInit() {
    console.log(this.unitId);
    this.server.getUnit(this.unitId, this.edit)
    .subscribe((data: any) => {
      this.data = data; console.log(data);
//      if(this.edit)this.editMode(this.data);
      });
  }
}