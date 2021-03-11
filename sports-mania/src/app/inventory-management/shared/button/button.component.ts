import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  constructor() { }
  @Input() text: string;
  @Input() color: string;
  @Input() size: string;
  @Input() disabled: boolean;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onClickTask: EventEmitter<any> = new EventEmitter();

}
