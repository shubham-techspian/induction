import { TestBed } from '@angular/core/testing';

import { ListInventoryServiceService } from './list-inventory-service.service';

describe('ListInventoryServiceService', () => {
  let service: ListInventoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListInventoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
