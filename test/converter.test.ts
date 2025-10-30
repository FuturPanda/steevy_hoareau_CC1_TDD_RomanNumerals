import { describe, expect, test } from 'vitest';
import { toRoman } from '../src/main';

const MINUS_HUNDRED = -100;
const FOUR_THOUSAND = 4000;

const ZERO = 0;
const ONE = 1;
const FIVE = 5;
const TEN = 10;
const FIFTY = 50;
const ONE_HUNDRED = 100;
const FIVE_HUNDRED = 500;
const ONE_THOUSAND = 1000;

const I = 'I';
const V = 'V';
const X = 'X';
const L = 'L';
const C = 'C';
const D = 'D';
const M = 'M';

describe('Global rules', () => {
  test('Should throw if number is 0', () => {
    const functionThatShouldThow = () => toRoman(ZERO);
    expect(functionThatShouldThow).toThrowError();
  });

  test('Should throw if number is negative', () => {
    const functionThatShouldThow = () => toRoman(MINUS_HUNDRED);
    expect(functionThatShouldThow).toThrowError();
  });

  test('Should throw if number is superior or egal to four thousand', () => {
    const functionThatShouldThow = () => toRoman(FOUR_THOUSAND);
    expect(functionThatShouldThow).toThrowError();
  });
});

describe('Number converter', () => {
  test('should return the corresponding roman letter when entering the corresponding number', () => {
    const inputNumbers = [ONE, FIVE, TEN, FIFTY, ONE_HUNDRED, FIVE_HUNDRED, ONE_THOUSAND];
    const expectedResult = [I, V, X, L, C, D, M];
    const convertedNumbers = inputNumbers.map(toRoman);
    expect(convertedNumbers).toStrictEqual(expectedResult);
  });

  test('should return combined roman letters for a given arabic number', () => {
    const inputNumbers = [133, 256, 3000];
    const expectedResult = ['CXXXIII', 'CCLVI', 'MMM'];
    const convertedNumbers = inputNumbers.map(toRoman);
    expect(convertedNumbers).toStrictEqual(expectedResult);
  });

  test('should return a roman letter with soustraction logic', () => {
    const inputNumbers = [134, 259, 2999];
    const expectedResult = ['CXXXIV', 'CCLIX', 'MMCMXCIX'];
    const convertedNumbers = inputNumbers.map(toRoman);
    expect(convertedNumbers).toStrictEqual(expectedResult);
  });
});
