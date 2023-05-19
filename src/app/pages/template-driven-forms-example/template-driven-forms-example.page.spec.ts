import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateDrivenFormsExamplePage } from './template-driven-forms-example.page';

describe('TemplateDrivenFormsExamplePage', () => {
  let component: TemplateDrivenFormsExamplePage;
  let fixture: ComponentFixture<TemplateDrivenFormsExamplePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TemplateDrivenFormsExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
