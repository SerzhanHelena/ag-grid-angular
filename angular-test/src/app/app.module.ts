import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridApplicationComponent } from './grid-application/grid-application.component';
import { HttpClientModule }   from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { GetDataService } from './get-data.service';
import 'ag-grid-enterprise';
import { ParamsRenderer } from './components/params-renderer';
import { LinkRenderer } from './components/link-renderer';

@NgModule({
  declarations: [
    AppComponent,
    GridApplicationComponent,
    ParamsRenderer, 
    LinkRenderer
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([ParamsRenderer, LinkRenderer])
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
