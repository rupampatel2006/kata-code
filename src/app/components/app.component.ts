import {Component, OnInit} from '@angular/core';
import {KataServiceService} from "../service/kata-service.service";
import {mergeMap} from "rxjs/operators";
import {OrdersModel} from "../models/orders.model";
import {VariablesModel} from "../models/variables.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  orders: OrdersModel;
  variables: VariablesModel;
  graphs = [];

  constructor(private kataService: KataServiceService) {
  }

  ngOnInit() {
    this.loadOrders();
  }

  /**
   * We can pre-load data using route resolver and make it readily available for the component to consume it. **/
  loadOrders() : void {

    this.kataService
      .getOrders()
      .pipe(mergeMap((orders: OrdersModel) => {
        this.orders = orders;
        return this.kataService.getVariables()
      }))
      .subscribe((variables: VariablesModel) => {
        this.variables = variables;
        this.graphs = this.prepareDataForTreeView(this.orders.graph, this.variables);
      });

  }

  private prepareDataForTreeView(array: any[], variables: VariablesModel) {

    array = array.map(item => {

      if (typeof item === "string" && variables.index[item]) {

        let newObj = variables.index[item];
        newObj.key = item;
        return newObj;

      } else if (typeof item === "object" && Array.isArray(item[Object.keys(item)[0]])) {

        item.name = Object.keys(item)[0];
        item.children = this.prepareDataForTreeView(item[Object.keys(item)[0]], variables);
        return item;

      }
    });

    return array;
  }
}


