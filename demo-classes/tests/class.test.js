'use strict';

const test = require('blue-tape');
const _ = require('lodash');

const Klass = require('../klass.js');

test('Class Module', (t) => {
  t.equals(
    'function',
    typeof Klass,
    'should export a function',
  );

  t.end();
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

  t.throws(
    () => new Klass(_.omit(fixture, ['name'])),
    /missing.option.NAME/,
    'should throw if missing NAME option',
  );

  t.throws(
    () => new Klass(_.omit(fixture, ['type'])),
    /missing.option.TYPE/,
    'should throw if missing TYPE option',
  );

  t.throws(
    () => new Klass(_.omit(fixture, ['description'])),
    /missing.option.DESCRIPTION/,
    `should throw if missing DESCRIPTION option`,
  );

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

  t.end();
});

test('Instance Methods', (t) => {
  const options = {
    name: 'testing',
    type: 1,
    description: 'hello world',
  };
  const klass = new Klass(options);

  t.notEqual(
    undefined,
    klass.getType,
    'should have an instance method called "getType"',
  );

  t.equal(
    'function',
    typeof klass.getType,
    'should have an instance property "getType" as function',
  );

  t.end();
});
