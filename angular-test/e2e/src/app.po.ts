import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSwitchButton() {
    return element(by.cssContainingText('button', 'Switch to select mode'));
  }

  getTotalCount() {
    return element(by.cssContainingText('div', 'Total count')).$('span').getText();
  }

  getSelectedRowsCount() {
    return element(by.cssContainingText('div', 'Selected records count')).$('span').getText();
  }

  getListHeaders() {
    return element
        .all(by.css('.ag-header-cell-text')).getText();
}

}
