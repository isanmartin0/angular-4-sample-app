import { AngularAppPage } from './app.po';

describe('angular-app App', () => {
  let page: AngularAppPage;

  beforeEach(() => {
    page = new AngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    //expect(page.getParagraphText()).toEqual('app works!');
    //expect(page.getParagraphText()).toEqual('Loading...');
    expect(page.getCitiesElements().count()).toBe(9);
  });
});
