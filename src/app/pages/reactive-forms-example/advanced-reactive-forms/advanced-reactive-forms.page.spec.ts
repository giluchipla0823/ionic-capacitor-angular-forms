import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvancedReactiveFormsPage } from './advanced-reactive-forms.page';

describe('AdvancedReactiveFormsPage', () => {
  let component: AdvancedReactiveFormsPage;
  let fixture: ComponentFixture<AdvancedReactiveFormsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdvancedReactiveFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
