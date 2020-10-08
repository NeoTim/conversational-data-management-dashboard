
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from '@app/components/shared/dynamic-form/field-base';

@Component({
  selector: 'app-dynamic-form-field',
  templateUrl: './dynamic-form-field.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormFieldComponent {
  @Input() field: FieldBase<string>;
  @Input() form: FormGroup;
  constructor() {}

  get isValid(): boolean {
    return this.form.controls[this.field.key].valid;
  }
}
