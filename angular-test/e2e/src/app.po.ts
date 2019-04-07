import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getSwitchButton() {
    return element(by.cssContainingText('button', 'Switch to select mode'));
  }

  getTotalCount() {
    return element(by.css('.total-count')).$('span').getText();
  }

  getSelectedRowsCount() {
    return element(by.css('.selected-records')).$('span').getText();
  }

  getListHeaders() {
    return element
        .all(by.css('.ag-header-cell-text')).getAttribute('innerText');
}

}
