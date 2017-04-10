import { DragulaPage } from './app.po';

describe('dragula App', () => {
  let page: DragulaPage;

  beforeEach(() => {
    page = new DragulaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
