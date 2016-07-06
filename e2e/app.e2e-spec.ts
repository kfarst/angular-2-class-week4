import { FormExamplesPage } from './app.po';

describe('form-examples App', function() {
  let page: FormExamplesPage;

  beforeEach(() => {
    page = new FormExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
