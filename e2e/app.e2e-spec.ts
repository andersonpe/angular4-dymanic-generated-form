import { TesteAngularPage } from './app.po';

describe('teste-angular App', () => {
  let page: TesteAngularPage;

  beforeEach(() => {
    page = new TesteAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
