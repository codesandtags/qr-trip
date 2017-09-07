import { QrTripPage } from './app.po';

describe('qr-trip App', function() {
  let page: QrTripPage;

  beforeEach(() => {
    page = new QrTripPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
