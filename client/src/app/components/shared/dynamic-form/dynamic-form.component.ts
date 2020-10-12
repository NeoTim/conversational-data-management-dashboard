import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FieldBase } from '@app/components/shared/dynamic-form/field-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit, OnChanges {
  @Input() fields: FieldBase<string>[] = [];
  @Output() getPayload = new EventEmitter();

  form: FormGroup;
  payLoad = '';

  constructor() {}

  ngOnInit(): void {
    this.form = this.toFormGroup(this.fields);
  }
  ngOnChanges(): void {
    this.form = this.toFormGroup(this.fields);
  }

  onSubmit(): void {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.getPayload.emit(this.payLoad);
  }

  private toFormGroup(questions: FieldBase<string>[]): FormGroup {
    const group: any = {};

    questions.forEach((question) => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
