import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicReactiveFormsPage } from './dynamic-reactive-forms.page';

describe('DynamicReactiveFormsPage', () => {
  let component: DynamicReactiveFormsPage;
  let fixture: ComponentFixture<DynamicReactiveFormsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DynamicReactiveFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
