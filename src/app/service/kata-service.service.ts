import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrdersModel} from "../models/orders.model";
import {VariablesModel} from "../models/variables.model";

@Injectable({
  providedIn: 'root'
})
export class KataServiceService {

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<OrdersModel> {
    return this.http.get<OrdersModel>("assets/order.json");
  }

  getVariables(): Observable<VariablesModel> {
    return this.http.get<VariablesModel>("assets/variables.json");
  }


  // getOrderForVariable(name) {
  //   if (typeof (name) !== 'string' || !name.length) {
  //     return observableThrowError("Error!");
  //   }
  //
  //   return this.getOrders()
  //     .subscribe((order: any) => {
  //       return this.findVariable(order.graph, name);
  //     });
  //
  // }

}
