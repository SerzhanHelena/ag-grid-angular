import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should start with 50 count', () => {
    page.navigateTo();
    expect(page.getTotalCount()).toEqual('50');
  });

  it('should show checkbox column by clicking switch to select mode', () => {
    page.navigateTo();

    expect(page.getListHeaders()).toEqual(['', 'Published On', 'Video Title', 'Description']);
    page.getSwitchButton().click();

    expect(page.getListHeaders()).toEqual([ '', 'Published On', 'Video Title', 'Description', '']);

    page.getSwitchButton().click();

    expect(page.getListHeaders()).toEqual(['', 'Published On', 'Video Title', 'Description']);
  });

  it('should have expected column headers', () => {
    page.navigateTo();
    expect(page.getListHeaders()).toEqual(['', 'Published On', 'Video Title', 'Description']);
});

// it('first row should have expected data', () => {
//   page.navigateTo();
//   expect(page.getRowValues(0)).toEqual(['1', '10']);
// });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
