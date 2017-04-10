import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';

import { DragulaModule } from 'ng2-dragula';
import { WorkItemComponent } from './work-item/work-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
