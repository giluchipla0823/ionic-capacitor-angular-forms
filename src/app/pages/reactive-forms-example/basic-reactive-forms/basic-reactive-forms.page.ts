import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { finalize, pairwise } from 'rxjs';
import { AuthService } from 'src/app/services/fake/auth.service';

@Component({
  selector: 'app-basic-reactive-forms',
  templateUrl: './basic-reactive-forms.page.html',
  styleUrls: ['./basic-reactive-forms.page.scss'],
})
export class BasicReactiveFormsPage implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  get controls() {
    return this.form.controls as { [key: string]: AbstractControl<any, any> };
  }

  ngOnInit(): void {
    this.buildForm();

    this.form
      .get('email')
      .valueChanges.pipe(pairwise())
      .subscribe(([previousValue, newValue]) => {
        console.log({ previousValue, newValue });
      });
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Verificando...',
    });

    await loading.present();

    const { email, password } = this.form.value;

    this.authService
      .login(email, password)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe({
        next: () => this.router.navigate(['/main']),
        error: async (err) => {
          const alert = await this.alertController.create({
            message: err.message,
          });

          alert.present();
        },
      });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
