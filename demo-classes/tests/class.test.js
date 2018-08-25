'use strict';

const test = require('blue-tape');

const Klass = require('../klass.js');

test('Class Module', (t) => {
  t.equals(
    'function',
    typeof Klass,
    'should export a function',
  );
});

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
    Klass.toJSON,
    'should have class function called "toJSON"',
  );

  t.equal(
    'function',
    typeof Klass.toJSON,
    'should have class property "toJSON" as function',
  );
});
