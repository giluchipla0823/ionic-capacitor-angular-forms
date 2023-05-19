import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BasicReactiveFormsPage } from './basic-reactive-forms.page';

describe('BasicReactiveFormsPage', () => {
  let component: BasicReactiveFormsPage;
  let fixture: ComponentFixture<BasicReactiveFormsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BasicReactiveFormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
