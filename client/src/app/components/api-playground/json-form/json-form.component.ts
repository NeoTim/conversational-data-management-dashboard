import { Component, OnInit, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import * as Ajv from 'ajv';
import { IError, JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import jsonUtils from '@utils/api-playground-json-parser';

interface ValidatorState {
  canSave?: boolean;
  errorMessage?: string;
}
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
})
export class JsonFormComponent implements OnInit, OnChanges {
  @ViewChild('editorMult') editorMult: JsonEditorComponent;

  @Input() request;

  @Input() schemas;

  @Output() getJSON = new EventEmitter();
  options = new JsonEditorOptions();
  data: any;
  payLoad;

  schemaValidator: Ajv.Ajv;
  validatorState: ValidatorState = {};

  constructor() {}

  showJson(data): any {
    return JSON.stringify(data, null, 2);
  }

  changeLog(event = null): void {
    this.validatorState.canSave = this.schemaValidator.validate('mySchema', this.editorMult.get()) === true;

    if (!this.validatorState.canSave) {
      const err = this.schemaValidator.errors[0];
      this.validatorState.errorMessage = err.dataPath + ' ' + err.message;
    }
  }

  ngOnInit(): void {
    this.updateForm();
  }

  ngOnChanges(): void {
    this.updateForm();
  }

  onSubmit(event): void {
    event.stopPropagation();
    this.payLoad = JSON.stringify(this.editorMult.get());
    this.getJSON.emit(this.payLoad);
  }

  updateForm(): void {
    const gRequest = this.request;
    this.data = jsonUtils.unpackRequest(gRequest, this.schemas);
    this.options.language = 'en';
    this.options.mode = 'form';
    this.options.modes = this.options.modes = ['code', 'form', 'tree', 'view'];
    this.options.statusBar = this.options.statusBar = false;

    const filteredSchemas = Object.values(this.schemas).filter((schema: any) => {
      return schema.id !== this.request.$ref;
    });
    const ajv = new Ajv({ format: false, allErrors: true, schemaId: 'id' });
    this.schemaValidator = ajv.addSchema(this.schemas[this.request.$ref], 'mySchema').addSchema(filteredSchemas);

    this.validatorState.canSave = this.schemaValidator.validate('mySchema', this.data) === true;

    if (!this.validatorState.canSave) {
      const err = this.schemaValidator.errors[0];
      this.validatorState.errorMessage = err.dataPath + ' ' + err.message;
    }
  }
}
