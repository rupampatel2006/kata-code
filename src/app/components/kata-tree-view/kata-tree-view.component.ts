import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-kata-tree-view',
  templateUrl: './kata-tree-view.component.html',
  styleUrls: ['./kata-tree-view.component.css']
})
export class KataTreeViewComponent implements OnInit {

  @Input('data') data: any[];
  isCollapsed = [];

  constructor() { }

  ngOnInit() {
  }
}
