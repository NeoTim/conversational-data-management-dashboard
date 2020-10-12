import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '@app/components/shared/dynamic-form/dynamic-form.component';
import { DynamicFormFieldComponent } from '@app/components/shared/dynamic-form/dynamic-form-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [DynamicFormComponent, DynamicFormFieldComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [DynamicFormComponent, DynamicFormFieldComponent],
})
export class DynamicFormModule {}
