import { ShoppingCartEnsuraPage } from './app.po';

describe('shopping-cart-ensura App', () => {
  let page: ShoppingCartEnsuraPage;

  beforeEach(() => {
    page = new ShoppingCartEnsuraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
