'use strict';

const MAX_CODE_POINT = require('max-code-point');
const MIN_4BYTE_CODE_POINT = require('min-4byte-code-point');
const non4byteCharsRegex = require('.');
const regexpu = require('regexpu');
const test = require('tape');

test('non4byteCharsRegex', t => {
  t.ok(
    non4byteCharsRegex.test(' ABC_あいうえお　'),
    'should match a string with no 4-byte characters.'
  );

  t.notOk(
    non4byteCharsRegex.test(String.fromCodePoint(MIN_4BYTE_CODE_POINT)),
    'should not match a string full of 4-byte characters.'
  );

  t.notOk(
    non4byteCharsRegex.test(`abc ${String.fromCodePoint(MAX_CODE_POINT)} 123`),
    'should not match a string with at least one 4-byte character.'
  );

  t.ok(
    non4byteCharsRegex.test(''),
    'should match an empty string.'
  );

  t.strictEqual(
    `/${non4byteCharsRegex.source}/`,
    regexpu.transpileCode(`/^[^\\u{${MIN_4BYTE_CODE_POINT.toString(16)}}-\\u{${MAX_CODE_POINT.toString(16)}}]*$/u`),
    'should be equivalent to /^[^\\u{10000}-\\u{10ffff}]*$/u.'
  );

  t.end();
});
