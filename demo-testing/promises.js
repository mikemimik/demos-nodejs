'use strict';

function validateOptions (options) {
  return new Promise((resolve, reject) => {
    if (!options) {
      const noParamsError = new Error('missing.param:options');
      return reject(noParamsError);
    }
    if (options && !options.info) {
      const noPropertyError = new Error('missing.param:options.info');
      return reject(noPropertyError);
    }
    return resolve(options);
  });
}

function getSomeData (options) {
  return new Promise((resolve, reject) => {
    if (typeof options.info !== 'string') {
      const badOptionError = new Error('bad.param:options.info');
      return reject(badOptionError);
    }
    const fixtureData = [
      { planet: 'mars' },
      { planet: 'earth' },
      { planet: 'jupiter' },
    ];
    return resolve({ data: fixtureData });
  });
}

function mutateData (data) {
  return new Promise((resolve, reject) => {
    return resolve(data);
  });
}

module.exports = function doSomething (options) {
  return Promise.resolve(options)
    .then(validateOptions)
    .then(getSomeData)
    .then(mutateData);
};
