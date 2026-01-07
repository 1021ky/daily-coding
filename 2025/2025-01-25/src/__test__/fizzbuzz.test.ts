import { describe, expect, test } from '@jest/globals';
import { fizzbuzz } from '../fizzbuzz';

describe('fizzbuzz', () => {
    test('15の倍数のときを除いて3の倍数ならばfizz', () => {
        expect(fizzbuzz(3)).toBe('fizz');
        expect(fizzbuzz(15)).not.toBe('fizz');
    });

    test('15の倍数のときを除いて5の倍数ならばbuzz', () => {
        expect(fizzbuzz(5)).toBe('buzz');
        expect(fizzbuzz(15)).not.toBe('buzz');
    });

    test('3の倍数でも5の倍数でもないならば数値の文字列', () => {
        expect(fizzbuzz(12)).toBe('12');
    });
});