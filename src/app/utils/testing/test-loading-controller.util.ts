export class TestLoadingControllerUtil {
  static setupSpy() {
    const loadingElement = jasmine.createSpyObj('HTMLIonLoadingElement', [
      'present',
      'dismiss',
    ]);

    const loadingController = jasmine.createSpyObj('LoadingController', {
      create: Promise.resolve(loadingElement),
    });

    return {
      loadingController,
      loadingElement,
    };
  }
}
