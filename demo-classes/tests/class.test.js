'use strict';

const test = require('blue-tape');

const Klass = require('../klass.js');

test('Class Constructor', (t) => {
  const fixture = {
    name: 'First Object',
    type: 1,
    description: '',
    created: '',
    source: {
      name: 'gegdetaw',
      href: 'http://gegdetaw.uz/necfab',
    },
  };
  t.throws(
    () => new Klass(),
    /missing.param.OPTIONS/,
    'should throw if missing options param',
  );

  Object.keys(fixture).forEach((key) => {
    t.throws(
      () => new Klass(_.omit(fixture, key)),
      new RegExp(`missing.option.${key.toUpperCase}`),
      `should throw if missing ${key} option`,
    );
  });

  t.end();
});

test('Class Methods', (t) => {
  t.notEqual(
    undefined,
    Klass.getSource,
    'should have class function called "getSource"',
  );

  t.equal(
    'function',
    typeof Klass.getSource,
    'should have class property "getSource" as function',
  );
});
