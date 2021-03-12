import { HttpHeaders } from '@angular/common/http';
export const ROUTE_API_URL = {
    MASTER_DATA_URL: 'api/masterData',
    LOGIN_DATA_URL: 'http://localhost:3000/login',
    GET_INVENTORY_LIST : 'http://localhost:3000/sportsInventory'
};

/**
 * Headers for POST API call
 */
export let HTTP_OPTIONS = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
    })
};