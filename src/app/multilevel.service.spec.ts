import { TestBed } from '@angular/core/testing';
import { MultilevelService } from './multilevel.service';


describe('MultilevelService', () => {
  let service: MultilevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultilevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
