import { HerokuMeanPage } from './app.po';

describe('heroku-mean App', () => {
  let page: HerokuMeanPage;

  beforeEach(() => {
    page = new HerokuMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
