import { AngularDocsPage } from './app.po';

describe('angular-docs App', () => {
  let page: AngularDocsPage;

  beforeEach(() => {
    page = new AngularDocsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
