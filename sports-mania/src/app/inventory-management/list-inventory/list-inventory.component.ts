import { Component, OnInit,} from '@angular/core';
import { ListInventoryServiceService } from 'src/app/inventory-management/services/list-inventory-service.service';
import { Observable, } from 'rxjs';

@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.scss']
})
export class ListInventoryComponent implements OnInit {
  disabled = false;
  color = '#ffffff';
  text = 'Add Products';
  sportsInventory = [];
  tableData: any;
  displayMessage: string;
  totalRecords: number;
  isDelete = false;
  popupContent: any;
  showPopup: boolean;

  constructor(
    private listInventoryServiceService : ListInventoryServiceService
  ) { }

  ngOnInit(): void {
    this.loadInventoryList();
  }

  loadInventoryList(): void{
    this.listInventoryServiceService.getInventoryData().subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.tableData = response;
          if (this.tableData.length) {
            this.totalRecords = this.tableData.length;
          }
        } else {
          this.displayMessage = 'No Records Found';
          this.tableData = [];
          this.totalRecords = 0;
        }
      },
      (
        error
      ) => (
           console.log('error', error)
        )
    );
  }
  toggleDeletePopup(rowItem): void{
    this.showPopup = this.showPopup ? false : true;
    this.popupContent = rowItem.item_name;
    console.log(this.showPopup);
  }
  // tslint:disable-next-line: typedef
  popupAction(actionType){
    console.log(actionType);
    this.showPopup = this.showPopup ? false : true;

  }
}
