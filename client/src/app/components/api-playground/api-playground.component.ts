import { environment } from './../../../environments/environment';
import { FieldBase } from './../shared/dynamic-form/field-base';
import { Component, OnInit } from '@angular/core';
import { ParameterCheckAPIService, APIRequest } from '@app/services/parameter-check.service';
import { json } from 'body-parser';

interface ApiPlaygroundState {
  requestPayloadStr: string;
  parameters: FieldBase<string>[];
  methodName: string;
  parameterPayload: string;
  request: any;
  resourceName: string;
}

@Component({
  selector: 'app-api-playground',
  templateUrl: './api-playground.component.html',
  styleUrls: ['./api-playground.component.scss'],
})
export class ApiPlaygroundComponent implements OnInit {
  schemas: any;
  apis: any;

  state: ApiPlaygroundState = {
    resourceName: undefined,
    requestPayloadStr: undefined,
    parameters: undefined,
    methodName: undefined,
    parameterPayload: undefined,
    request: undefined,
  };

  response: string;
  environment = 'staging';

  ngOnInit(): void {
    this.parameterCheckAPIService.getAPIs().subscribe((data) => {
      this.apis = data;
      this.schemas = data.schemas;
    });
  }

  constructor(private parameterCheckAPIService: ParameterCheckAPIService) {}

  getRequestPayload(st: string): void {
    this.state.requestPayloadStr = st;
  }

  getParameterPayload(st: string): void {
    this.state.parameterPayload = st;
  }

  handleMethod(event, resource, method): void {
    this.resetParametersAndRequest();
    this.state.methodName = method;
    this.state.resourceName = resource;
    const parameters: FieldBase<string>[] = [];
    for (const [key, value] of Object.entries(this.apis.resources[resource][method].parameters)) {
      parameters.push(
        new FieldBase({
          key,
          label: key,
          required: true,
          type: value['type'],
        })
      );
    }

    if (parameters.length > 0) {
      this.state.parameters = parameters;
    } else {
      this.state.parameters = undefined;
    }

    const request = this.apis.resources[resource][method].request;
    if (request) {
      this.state.request = request;
    }
  }

  onMakeRequest(): void {
    const method = this.apis.resources[this.state.resourceName][this.state.methodName];
    const parameters = this.state.parameterPayload !== undefined ? JSON.parse(this.state.parameterPayload) : undefined;
    const reqBody = this.state.requestPayloadStr !== undefined ? JSON.parse(this.state.requestPayloadStr) : undefined;

    const body: APIRequest = {
      method,
      parameters,
      reqBody,
    };

    this.parameterCheckAPIService.makeRequest(body).subscribe((data) => {
      this.response = JSON.stringify(data, null, 2);
    });
  }

  get isSubmittable(): boolean {
    if (this.state.request && !this.state.requestPayloadStr) {
      return false;
    }

    if (this.state.parameters && !this.state.parameterPayload) {
      return false;
    }

    return true;
  }

  onSelectEnvironment(event): void {
    this.environment = event.target.id;
  }

  private resetParametersAndRequest(): void {
    this.state = {
      resourceName: undefined,
      requestPayloadStr: undefined,
      parameters: undefined,
      methodName: undefined,
      parameterPayload: undefined,
      request: undefined,
    };

    this.response = undefined;
  }
}
