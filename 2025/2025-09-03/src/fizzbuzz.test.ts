import { fizzBuzz, fizzBuzzStrings } from './fizzbuzz';

describe('fizzBuzz', () => {
    it('should return the correct FizzBuzz value for a given number', () => {
        expect(fizzBuzz(15)).toBe("FizzBuzz");
    });
});

describe('fizzBuzzStrings', () => {
    it('should return the correct FizzBuzz sequence for a given number', () => {
        expect(fizzBuzzStrings(15)).toBe("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz");
    });
});