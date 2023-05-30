import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BasicReactiveFormsPage } from './basic-reactive-forms.page';
import { By } from '@angular/platform-browser';
import {
  AlertController,
  IonButton,
  IonInput,
  IonicModule,
  LoadingController,
} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/fake/auth.service';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TestLoadingControllerUtil } from 'src/app/utils/testing/test-loading-controller.util';
import { TestAlerControllerUtil } from 'src/app/utils/testing/test-alert-controller.util';
import { HttpStatusCode } from '@angular/common/http';

describe('BasicReactiveFormsPage', () => {
  let component: BasicReactiveFormsPage;
  let fixture: ComponentFixture<BasicReactiveFormsPage>;
  let authService: AuthService;
  let router: Router;
  let loadingControllerSpy: jasmine.SpyObj<LoadingController>;
  let loadingElementSpy: jasmine.SpyObj<HTMLIonLoadingElement>;
  let alertControllerSpy: jasmine.SpyObj<AlertController>;
  let alertElementSpy: jasmine.SpyObj<HTMLIonAlertElement>;

  beforeEach(waitForAsync(() => {
    const { loadingController, loadingElement } =
      TestLoadingControllerUtil.setupSpy();
    const { alertController, alertElement } = TestAlerControllerUtil.setupSpy();

    loadingElementSpy = loadingElement;
    loadingControllerSpy = loadingController;
    alertElementSpy = alertElement;
    alertControllerSpy = alertController;

    TestBed.configureTestingModule({
      declarations: [BasicReactiveFormsPage],
      imports: [
        CommonModule,
        IonicModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: LoadingController, useValue: loadingControllerSpy },
        { provide: AlertController, useValue: alertControllerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicReactiveFormsPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the form must have two ion-input tags', () => {
    const tags = fixture.debugElement.queryAll(By.directive(IonInput));

    expect(tags).toBeTruthy();
    expect(tags.length).toBe(2);
  });

  it('should the form must have a ion-button tag and must be of submit type', () => {
    const button = fixture.debugElement.query(By.directive(IonButton));

    expect(button).toBeTruthy();
    expect(button.nativeElement.type).toBe('submit');
  });

  it('should have a form with three fields (email, password and remember_me)', () => {
    const { form } = component;

    expect(form.contains('email')).toBeTruthy();
    expect(form.contains('password')).toBeTruthy();
  });

  it('should the email and password be required', () => {
    const { form } = component;
    const email = form.get('email');
    const password = form.get('password');

    email.setValue('');
    password.setValue('');

    expect(email.valid).toBeFalsy();
    expect(password.valid).toBeFalsy();
  });

  it('should the email have a valid format', () => {
    const control = component.form.get('email');

    control.setValue('admin@admin.com');

    expect(control.valid).toBeTruthy();
  });

  it('should allow user to log in when the form is valid', waitForAsync(() => {
    const formData = {
      email: 'admin@admin.com',
      password: 'secret',
    };

    const { email, password } = formData;

    const authServiceSpy = spyOn(authService, 'login').and.returnValue(
      of({ email })
    );

    const navigateSpy = spyOn(router, 'navigate');

    spyOn(component, 'onSubmit').and.callThrough();

    component.form.setValue(formData);

    const formElement: HTMLFormElement = fixture.debugElement.query(
      By.css('form')
    ).nativeElement;

    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.onSubmit).toHaveBeenCalled();
      expect(component.form.valid).toBeTruthy();
      expect(loadingControllerSpy.create).toHaveBeenCalledWith({
        message: 'Verificando...',
      });
      expect(loadingElementSpy.present).toHaveBeenCalled();
      expect(authServiceSpy).toHaveBeenCalledWith(email, password);
      expect(loadingElementSpy.dismiss).toHaveBeenCalled();
      expect(navigateSpy).toHaveBeenCalledWith(['/main']);
    });
  }));

  it('should deny user to log in when the credentials are incorrect', waitForAsync(() => {
    const loginError = {
      status: HttpStatusCode.BadRequest,
      message: 'Credenciales de acceso incorrectas',
    };

    spyOn(authService, 'login').and.returnValue(throwError(() => loginError));

    component.form.setValue({
      email: 'hello@hello.com',
      password: 'anything',
    });

    const formElement: HTMLFormElement = fixture.debugElement.query(
      By.css('form')
    ).nativeElement;

    formElement.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(component.form.valid).toBeTruthy();
      expect(loadingControllerSpy.create).toHaveBeenCalledWith({
        message: 'Verificando...',
      });
      expect(loadingElementSpy.present).toHaveBeenCalled();
      expect(loadingElementSpy.dismiss).toHaveBeenCalled();
      expect(alertControllerSpy.create).toHaveBeenCalledWith({
        message: loginError.message,
      });
      expect(alertElementSpy.present).toHaveBeenCalled();
    });
  }));
});
