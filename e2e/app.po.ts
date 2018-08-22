import { browser, element, by } from 'protractor';

export class AngularAppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToCities() {
    return browser.get('/cities');
  }

  getParagraphText() {
    return element(by.css('app-root')).getText();
  }

  getCitiesElements() {
      return element.all(by.tagName('li'));
  }
}
