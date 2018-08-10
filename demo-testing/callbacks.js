'use strict';

function validateOptions (options, callback) {
  if (!options) {
    const noParamsError = new Error('missing.param:options');
    return callback(noParamsError);
  }
  if (options && !options.info) {
    const noPropertyError = new Error('missing.param:options.info');
    return callback(noPropertyError);
  }
  return callback(null);
}

function getSomeData (options, callback) {
  if (typeof options.info !== 'string') {
    const badOptionError = new Error('bad.param:options.info');
    callback(badOptionError, null);
  }
  const fixtureData = [
    { planet: 'mars' },
    { planet: 'earth' },
    { planet: 'jupiter' },
  ];
  return callback(null, { data: fixtureData });
}

function mutateData (data, callback) {
  callback(null, data);
}

module.exports = function doSomething (options, callback) {
  validateOptions(options, (err) => {
    if (err) {
      console.log('validation of params failed');
      return callback(err, null);
    }
    getSomeData(options, (err, data) => {
      if (err) {
        console.log('getting some data failed');
        return callback(err, null);
      }
      mutateData(data, (err, result) => {
        if (err) {
          console.log('mutating the data failed');
          return callback(err, null);
        }
        return callback(null, result);
      });
    });
  });
};
