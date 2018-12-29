import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KataTreeViewComponent } from './kata-tree-view.component';
import {CollapseModule} from "ngx-bootstrap";

describe('KataTreeViewComponent', () => {
  let component: KataTreeViewComponent;
  let fixture: ComponentFixture<KataTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KataTreeViewComponent ],
      imports: [CollapseModule.forRoot()],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KataTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
