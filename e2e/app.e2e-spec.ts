import { School1Page } from './app.po';

describe('school1 App', () => {
  let page: School1Page;

  beforeEach(() => {
    page = new School1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
