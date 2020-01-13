import { Component, OnInit , Input} from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, TableService, RichTextEditorComponent } from '@syncfusion/ej2-angular-richtexteditor';

import { CKEditorComponent, CKEditor5 } from '@ckeditor/ckeditor5-angular';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  @Input() data;
  @Input() grade;
  public Editor = ClassicEditor;
  public conf = {
        toolbar: [ ]
    }
  public inlineMode: object = { enable: true, onSelection: true };

  constructor() { }

  ngOnInit() {
  }

}