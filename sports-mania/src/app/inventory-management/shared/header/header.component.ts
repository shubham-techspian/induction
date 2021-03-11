import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() color: 'primary' | 'secondary' = 'primary';
  @Input() href: string;
  @Input() target?: '_self' | '_blank' | '_parent' | '_top' = '_self';

  public get classes(): Array<string> {
    return ['link', `${this.color}-link`];
  }
  constructor() { }

}
