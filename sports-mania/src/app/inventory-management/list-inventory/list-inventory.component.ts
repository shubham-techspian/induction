import {
  Component,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.scss']
})
export class ListInventoryComponent implements OnInit {
  disabled = false;
  color = '#ffffff';
  text = 'Add Products';
sportsInventory = [
  {
  'item_name': 'Racket',
  'item_type':' Badminton',
  'Quantity':' 34',
  'Price': 100
},
{
  'item_name': 'Racket',
  'item_type': 'Badminton',
  'Quantity': '34',
  'Price': 100
},
{
  'item_name': 'Bat',
  'item_type': 'Cricket',
  'Quantity': '78',
  'Price': 600
},
{
  'item_name': 'Stick',
  'item_type': 'Hockey',
  'Quantity': '12',
  'Price': 50
},
{
  'item_name': 'Racket',
  'item_type': 'Badminton',
  'Quantity':' 34',
  'Price': 500
},
{
  'item_name': 'Racket',
  'item_type': 'Badminton',
  'Quantity': '34',
  'Price': 100
},
{
  'item_name': 'Bat',
  'item_type': 'Cricket',
  'Quantity': '78',
  'Price': 600
},
]
  constructor() { }

  ngOnInit(): void {
    console.log('fdf',this.sportsInventory)
  }

}
