/* eslint-disable max-len */
import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });
  test('with mods', () => {
    expect(classNames('someClass', { hover: true, scrollable: true }, ['class1', 'class2'])).toBe(
      'someClass class1 class2 hover scrollable'
    );
  });

  test('with mods false', () => {
    expect(classNames('someClass', { hover: false, scrollable: true }, ['class1', 'class2'])).toBe(
      'someClass class1 class2 scrollable'
    );
  });
  test('with mods undefined', () => {
    expect(classNames('someClass', { hover: true, scrollable: undefined }, ['class1', 'class2'])).toBe(
      'someClass class1 class2 hover'
    );
  });
});
