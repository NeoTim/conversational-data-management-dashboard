import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import mockData from '@services/mock-data';
import jsonUtils from '@utils/api-pg-json-parser';
import { request } from 'https';
import * as Ajv from 'ajv';

@Component({
  selector: 'app-api-playground',
  templateUrl: './api-playground.component.html',
  styleUrls: ['./api-playground.component.scss'],
})
export class ApiPlaygroundComponent {
  @ViewChild('editor') editor: JsonEditorComponent;
  @ViewChild('editorMult') editorMult: JsonEditorComponent;

  showData;
  schemas = mockData.schemas;
  options = new JsonEditorOptions();
  data: any;

  constructor() {
    const ajv = new Ajv({ allErrors: true });
    const schema = {
      $id: '#none',
      type: 'object',
      properties: {
        getStructuredRequestContentRequest: {
          description:
            'The request to actual GeoServicesInteractionsDataStoreInteractionsInternalService.GetStructuredRequestContent RPC.',
          $ref:
            'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoGetStructuredRequestContentRequest',
        },
      },
      required:["getStructuredRequestContentRequest"],
      additionalProperties: false,
    };
    const schema2 = {
      description:
        "Request message sent by internal clients to SIFS Data Store for fetching consumer's initial Structured Request content in a thread. Next ID: 2",
      properties: {
        threadId: {
          type: 'number',
        },
      },
      type: 'object',
      required:["threadId"],
      $id:
        'GeoServicesInteractionsBoqDatastoreInteractionsInternalProtoGetStructuredRequestContentRequest',
    };
    const isValid = ajv.addSchema(schema, 'mySchema').addSchema(schema2).validate('mySchema', {getStructuredRequestContentRequest:{}});
    console.log(isValid);
    console.log(ajv.errors)
    const gRequest =
      mockData.resources.datastore.resources.interactions.resources.internal
        .methods.bridgeTrackRouterSubmitAction.request;

    this.data = jsonUtils.unpackRequest(gRequest, this.schemas);
    console.log(this.data);
    this.options.language = 'en';
    this.options.mode = 'tree';
    this.options.modes = this.options.modes = ['form', 'tree', 'view'];
    this.options.statusBar = this.options.statusBar = false;
  }

  showJson(data): any {
    return JSON.stringify(data, null, 2);
  }

  changeLog(event = null): void {
    this.showData = this.editorMult.get();
  }
}
