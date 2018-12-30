import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {KataTreeViewComponent} from "./kata-tree-view/kata-tree-view.component";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {KataServiceService} from "../service/kata-service.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        KataTreeViewComponent
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
      ],
      providers: [
        KataServiceService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h6 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h6').textContent).toContain('Brand Tracking: On-Demand Taxis and Independent Coffee');
  }));
});
