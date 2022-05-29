import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MaterialModule } from '../material/material.module';
import {AutocompletePlainInputExample} from './autocomplete-plain-input-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AutocompletePlainInputExample],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AutocompletePlainInputExample],
})
export class AppModule {}
