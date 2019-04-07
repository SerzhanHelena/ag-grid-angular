import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridApplicationComponent } from './components/grid-application/grid-application.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { GetDataService } from './services/get-data.service';
import { ImageRendererComponent } from './components/image-renderer.component';
import { LinkRendererComponent } from './components/link-renderer.component';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [
    AppComponent,
    GridApplicationComponent,
    ImageRendererComponent,
    LinkRendererComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([ImageRendererComponent, LinkRendererComponent])
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
