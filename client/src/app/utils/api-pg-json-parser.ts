const unpackRequest = (request, schemas) => {
  const res: object = {};
  if (request.$ref === undefined) {
    return res;
  }

  const stack = [[res, schemas[request.$ref]]];
  while (stack.length > 0) {
    let curr;
    let schema;
    [curr, schema] = stack.pop();

    const properties: object = schema.properties;
    for (const [key, value] of Object.entries(properties)) {
      if (value.$ref === undefined) {
        if (value.type === 'array'){
          curr[key] = [];
          if (value.items.$ref === undefined){
            curr[key].push('');
          } else {
            const obj = {};
            curr[key].push(obj);
            stack.push([obj, schemas[value.items.$ref]]);
          }
        }else{
          curr[key] = '';
        }
        continue;
      }
      curr[key] = {};
      stack.push([curr[key], schemas[value.$ref]]);
    }
  }
  return res;
};

const utils = {unpackRequest};

export default utils;
