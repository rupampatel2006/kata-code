import { TestBed, inject } from '@angular/core/testing';
import { KataServiceService } from './kata-service.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('KataServiceService', () => {

  let orders = {
    "element": "shoji:order",
    "self": "/datasets/349d49/variables/hier/",
    "graph": [
      {
        "Awareness Metrics": [
          {
            "Taxis": [
              "11b0b9",
              "7a89e0"
            ]
          },
          {
            "Coffee": [
              "786c0f",
              "2d27ab"
            ]
          }
        ]
      },
      {
        "Purchase Consideration and Behavior": [
          {
            "Taxis": [
              "ede6a8",
              "62c00f",
              "0f6ce0",
              "f2a681"
            ]
          },
          {
            "Coffee": [
              "8d7127",
              "ee3e40",
              "8f7db6",
              "3a5f89"
            ]
          }
        ]
      },
      {
        "Demographics and Technographics": [
          "c83da2",
          "e08fbc",
          "1b44a4",
          "5b6a73",
          "91a33f",
          "9f4b60"
        ]
      },
      {
        "Dimensions": [
          "d88613",
          "0323cf"
        ]
      },
      "d0fe8b",
      "0894c5"
    ]
  }


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

  it('should be created11', inject([KataServiceService], (service: KataServiceService) => {
    expect(service.getVariablePosition(orders.graph, '0f6ce0')).toEqual('2.1.3');
  }));

});
