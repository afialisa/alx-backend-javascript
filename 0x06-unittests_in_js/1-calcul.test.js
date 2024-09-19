const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should return 6 when inputs are 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 0 when inputs are -1.4 and 1.3', function () {
            assert.strictEqual(calculateNumber('SUM', -1.4, 1.3), 0);
        });
    });

    describe('SUBTRACT', function () {
        it('should return -4 when inputs are 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 1 when inputs are 3.7 and 2.1', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 2.1), 2);
        });
    });

    describe('DIVIDE', function () {
        it('should return 0.2 when inputs are 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it('should return "Error" when inputs are 1.4 and 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
        });
    });

    // Edge case for an invalid type
    describe('Invalid Type', function () {
        it('should throw an error for invalid type', function () {
            assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error, 'Invalid operation type');
        });
    });
});

