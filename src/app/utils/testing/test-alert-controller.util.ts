import { AlertController } from '@ionic/angular';

export class TestAlerControllerUtil {
  static setupSpy() {
    const alertElement = jasmine.createSpyObj<HTMLIonAlertElement>(
      'HTMLIonAlertElement',
      ['present', 'dismiss']
    );

    const alertController = jasmine.createSpyObj<AlertController>(
      'AlertController',
      {
        create: Promise.resolve(alertElement),
      }
    );

    return {
      alertController,
      alertElement,
    };
  }
}
