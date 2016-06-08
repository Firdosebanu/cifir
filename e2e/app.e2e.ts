import { CifirpPage } from './app.po';

describe('cifirp App', function() {
  let page: CifirpPage;

  beforeEach(() => {
    page = new CifirpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cifirp works!');
  });
});
