import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild, Input, OnChanges, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { withKnobs, text, select } from '@storybook/addon-knobs';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
@Input() popupContent = '' ;
@Input() popupTitle  = 'Delete Product';
@Input() showPopup;
@Input() backgroundColor : string;
@Output() action = new EventEmitter();
  constructor() { }

  ngOnInit(): any {
  }
  // tslint:disable-next-line: typedef
  popupAction(actionType){
   this.action.emit(actionType);
  }
}
