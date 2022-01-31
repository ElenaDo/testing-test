import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LightswitchCompComponent } from './lightswitch-comp/lightswitch-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LightswitchCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
