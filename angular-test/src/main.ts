import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {LicenseManager} from 'ag-grid-enterprise';

LicenseManager.setLicenseKey('Evaluation_License-_Not_For_Production_Valid_Until_8_June_2019__MTU1OTk0ODQwMDAwMA==2a361053d67171ad2544a38cb4ee76ad');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
