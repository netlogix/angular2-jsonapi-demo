import { Angular2JsonapiDemoPage } from './app.po';

describe('angular2-jsonapi-demo App', function() {
  let page: Angular2JsonapiDemoPage;

  beforeEach(() => {
    page = new Angular2JsonapiDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
