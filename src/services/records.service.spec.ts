import { TestBed } from '@angular/core/testing';

import { RecordsService } from './records.service';
import {HttpClient} from "@angular/common/http";
import {HttpTestingController} from "@angular/common/http/testing";

describe('RecordsService', () => {
  let service: RecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient, HttpTestingController],
      providers: [RecordsService]
    });
    service = TestBed.inject(RecordsService);
  });

  it('should be created',
    () => {
      expect(service).toBeTruthy();
    });
});
