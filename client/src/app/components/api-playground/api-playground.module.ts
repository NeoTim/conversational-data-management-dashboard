import { AceEditorModule } from 'ng2-ace-editor';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormComponent } from './json-form/json-form.component';
import { MaterialModule } from '@app/material.module';
import { DynamicFormModule } from '@app/components/shared/dynamic-form/dynamic-form.module';

@NgModule({
  declarations: [JsonFormComponent],
  imports: [AceEditorModule, CommonModule, NgJsonEditorModule, MaterialModule, DynamicFormModule],
  exports: [JsonFormComponent],
})
export class ApiPlaygroundModule {}
