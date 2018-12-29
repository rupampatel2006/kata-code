import { TestBed, inject } from '@angular/core/testing';
import { KataServiceService } from './kata-service.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('KataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        KataServiceService]
    });
  });

  it('should be created', inject([KataServiceService], (service: KataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
