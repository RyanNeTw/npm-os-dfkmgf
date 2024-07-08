import {describe, expect, test} from '@jest/globals';
import average from '../average';


describe('Mediane test', () => {
  
    test('simple test', () => {
        expect(average([1, 2, 3, 5, 6])).toBe(3.4)
    })

    test('if params is null or undefined', () => {
        expect(average(null)).toBeNull()
    })

    test('if array contains string', () => {
        expect(() => average([1, "2", 3])).toThrow('Is not number')
    })

})