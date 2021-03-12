import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { ROUTE_API_URL, HTTP_OPTIONS } from '../../shared/app-config';
@Injectable({
  providedIn: 'root'
})
export class ListInventoryServiceService {

  constructor(private http: HttpClient) { }

  getInventoryData(): any  {
    return this.http.get(ROUTE_API_URL.GET_INVENTORY_LIST, HTTP_OPTIONS);
  }
}
