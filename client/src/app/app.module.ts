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
import { HttpClientModule } from '@angular/common/http';
import { ApiPlaygroundModule } from '@app/components/api-playground/api-playground.module';
import { DynamicFormModule } from '@app/components/shared/dynamic-form/dynamic-form.module';
import { CommonModule } from '@angular/common';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [
    AppComponent,
    ApiPlaygroundComponent,
    HomeComponent,
    ShowComponent,
  ],
  imports: [
    AceEditorModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgJsonEditorModule,
    HttpClientModule,
    ApiPlaygroundModule,
    DynamicFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
