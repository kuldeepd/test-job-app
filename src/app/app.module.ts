import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './layouts/header/header.component';
import { ErrorComponent } from './layouts/error/error.component';
import { StoreModule } from '@ngrx/store';
import { jobReducer } from './store/job.reducer';
import { HttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { JobEffects } from './store/job.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({jobEntries:jobReducer}),
    FontAwesomeModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
