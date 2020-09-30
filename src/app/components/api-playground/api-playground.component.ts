import { Component, ViewChild } from '@angular/core';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';
import mockData from '@services/mock-data';
import jsonUtils from '@utils/api-pg-json-parser';
import { request } from 'https';

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
    const gRequest =
      mockData.resources.datastore.resources.interactions.resources.internal.methods.bridgeTrackRouterSubmitAction.request;

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
