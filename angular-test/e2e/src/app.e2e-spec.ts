import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display number of records', () => {
    page.navigateTo();
    expect(page.getTotalCount()).toEqual.bind('{{totalCount}}');
  });

  it('should display number of selected records', () => {
    page.navigateTo();
    expect(page.getSelectedRowsCount()).toEqual.bind('{{selectedRowsCount}}');
  });

  it('should show checkbox column by clicking switch to select mode', () => {
    page.navigateTo();

    expect(page.getListHeaders()).toEqual(['', 'Published On', 'Video Title', 'Description']);
    page.getSwitchButton().click();

    expect(page.getListHeaders()).toEqual(['', 'Published On', 'Video Title', 'Description', '']);

    page.getSwitchButton().click();

    expect(page.getListHeaders()).toEqual(['', 'Published On', 'Video Title', 'Description']);
  });

  it('should have expected column headers', () => {
    page.navigateTo();
    const arr = ['', 'Published On', 'Video Title', 'Description'];
    expect(page.getListHeaders()).toEqual(arr);
});

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
