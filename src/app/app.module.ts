import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app.component';
import {KataServiceService} from "./service/kata-service.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CollapseModule} from "ngx-bootstrap";
import { KataTreeViewComponent } from './components/kata-tree-view/kata-tree-view.component';

@NgModule({
  declarations: [
    AppComponent,
    KataTreeViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CollapseModule.forRoot()
  ],
  providers: [KataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
