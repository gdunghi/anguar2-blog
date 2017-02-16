import { MyblogPage } from './app.po';

describe('myblog App', function() {
  let page: MyblogPage;

  beforeEach(() => {
    page = new MyblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
