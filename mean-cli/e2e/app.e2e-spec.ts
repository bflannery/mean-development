import { MeanCliPage } from './app.po';

describe('mean-cli App', () => {
  let page: MeanCliPage;

  beforeEach(() => {
    page = new MeanCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
