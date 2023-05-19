import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsExamplePage } from './reactive-forms-example.page';

describe('ReactiveFormsExamplePage', () => {
  let component: ReactiveFormsExamplePage;
  let fixture: ComponentFixture<ReactiveFormsExamplePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReactiveFormsExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
