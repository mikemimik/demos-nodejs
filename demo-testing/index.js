'use strict';

const doSomethingWithCallbacks = require('./callbacks');
const doSomethingWithPromises = require('./promises');

const opts = {
  info: 'all',
};

doSomethingWithCallbacks(opts, (err, data) => {
  if (err) {
    console.log(`something inside doSomething() blew up`);
    console.log(err);
  }

  console.log(`we're done doing things`);
  console.log(data);
});

doSomethingWithPromises(opts)
  .then((data) => {
    console.log(`we're done doing things`);
    console.log(data);
  })
  .catch((err) => {
    console.log(`something inside doSomething() blew up`);
    console.log(err);
  });
