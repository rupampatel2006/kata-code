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
  getOrderFromVariable(name: string): string | Observable<any> {
    if (typeof (name) !== 'string' || !name.length) {
      return Observable.throw("Error!");
    }

    this.getOrders()
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
  getVariableFromPosition(position: string): any {
    this.getOrders()
      .subscribe((order: any) => {
        return this.findVariableFromPosition(order.graph, position);
      });
  }

  public findVariableFromPosition(graph: any[], position: string, index = 0): string {
    let positionArray: any = position.split('.');

    positionArray = positionArray.map((item: any) => item - 1);

    if (typeof (Array.isArray(graph) && graph[positionArray[index]]) === 'string') {
      return graph[positionArray[index]];
    } else if (Array.isArray(graph) && typeof (graph[positionArray[index]]) === 'object') {
      return this.findVariableFromPosition(graph[positionArray[index]][Object.keys(graph[positionArray[index]])[0]], position, ++index);
    } else {
      return null;
    }
  }
}
