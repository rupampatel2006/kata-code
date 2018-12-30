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


  // 2. A service that accepts a variable's name and returns the variable's position in the order.
  // Ex: 2.1.1 indicates 2nd node -> 1st child -> 1st subChild
  getOrderFromVariable(name: string) {
    if (typeof (name) !== 'string' || !name.length) {
      return Observable.throw("Error!");
    }

    return this.getOrders()
      .subscribe((order: any) => {
        return this.getVariablePosition(order.graph, name);
      });

  }

  public getVariablePosition(graph, searchName: string, prevPosition?: string) {
    let position = prevPosition || '';
    let index = graph.indexOf(searchName);

    if (index === -1) {

      graph.forEach((elem, index) => {
        if (elem === searchName) {
          position = position ? position + '.' + (index + 1).toString() : (index + 1).toString();
          return;

        } else if (JSON.stringify(elem).includes(`"${searchName}"`)) {

          if (Object.keys(elem)[0] && Array.isArray(elem[Object.keys(elem)[0]])) {
            position = (index + 1).toString() + '.' + this.getVariablePosition(elem[Object.keys(elem)[0]], searchName, position);
          }
          return;
        }
      })
    } else {
      return index + 1;
    }
    return position;
  }


  // 3. A service that accepts a position in the order and returns a variable.
  getVariableFromPosition(position: string) {
    return this.getOrders()
      .subscribe((order: any) => {
        return this.findVariableFromPosition(order.graph, position);
      });

  }

  private findVariableFromPosition(graph: any[], position: string) {
  }
}
