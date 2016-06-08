import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CifirpAppComponent } from '../app/cifirp.component';

beforeEachProviders(() => [CifirpAppComponent]);

describe('App: Cifirp', () => {
  it('should create the app',
      inject([CifirpAppComponent], (app: CifirpAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'cifirp works!\'',
      inject([CifirpAppComponent], (app: CifirpAppComponent) => {
    expect(app.title).toEqual('cifirp works!');
  }));
});
