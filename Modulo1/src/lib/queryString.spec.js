const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Filipe',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Filipe&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Filipe',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Filipe&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as a value', () => {
    const obj = {
      name: 'Filipe',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Filipe&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Filipe',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value to object', () => {
    const qs = 'name=Filipe';
    expect(parse(qs)).toEqual({
      name: 'Filipe',
    });
  });
});
