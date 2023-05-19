import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CustomValidatorsReactiveFormsPage } from './custom-validators-reactive-forms.page';

describe('CustomValidatorsReactiveFormsPage', () => {
  let component: CustomValidatorsReactiveFormsPage;
  let fixture: ComponentFixture<CustomValidatorsReactiveFormsPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(CustomValidatorsReactiveFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
