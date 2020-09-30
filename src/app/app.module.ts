// import { HomeComponent } from './components/home/home.component';
import { HomeComponent } from '@components/home/home.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiPlaygroundComponent } from './components/api-playground/api-playground.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { ShowComponent } from './components/api-playground/show.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiPlaygroundComponent,
    HomeComponent,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgJsonEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
