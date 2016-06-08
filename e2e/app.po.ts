export class CifirpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cifirp-app h1')).getText();
  }
}
