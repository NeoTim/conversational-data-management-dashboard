import  curlCommands  from '@utils/curl-commands-utils';
import discoveryMockData from '@models/sifs-api-pg-models/discovery-api-mock-data';
import * as _ from 'lodash';
import util from 'util';
import { exec } from 'child_process';

const execute = util.promisify(exec);

const processParameterCheckAPI = async (): Promise<any | null> => {
  try {
    const availableAPIs = await execute(curlCommands.AVAILABILITY_API_COMMAND);

    const availableResource: Map<string, any> = new Map();

    JSON.parse(availableAPIs.stdout).availableBridgeApis.forEach((element) => {
      availableResource.set(element.resource, element.availableMethods);
    });

    const res = {};
    let dataStr = JSON.stringify(discoveryMockData.schemas);
    dataStr = dataStr.replace(
      /"type":"any"/g,
      '"type":["number", "integer", "object", "string", "boolean", "array", "null"]'
    );

    res['schemas'] = JSON.parse(dataStr);

    res['resources'] = {};

    for (const [key, value] of Object.entries(discoveryMockData.resources)) {
      if (!availableResource.has(key)) {
        continue;
      }
      const methods = findMethodsOfResource_(value, availableResource.get(key));
      if (methods == null) {
        continue;
      }
      res['resources'][key] = methods;
    }

    return res;
  } catch (error) {
    return null;
  }
};

const findMethodsOfResource_ = (
  resource,
  availableApis: Array<any>
): any | null => {
  const stack: Array<any> = [];
  stack.push(resource);
  while (stack.length > 0) {
    const curr = stack.pop();

    if (_.has(curr, 'methods')) {
      const methods = _.pickBy(curr.methods, (value, key) => {
        return availableApis.includes(key);
      });

      if (_.isEmpty(methods)) {
        continue;
      }
      return methods;
    }

    for (const value of Object.values(curr)) {
      stack.push(value);
    }
  }

  return null;
};

export default { processParameterCheckAPI };
