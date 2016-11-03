import { CoconutPage } from './app.po';

describe('coconut App', function() {
  let page: CoconutPage;

  beforeEach(() => {
    page = new CoconutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
