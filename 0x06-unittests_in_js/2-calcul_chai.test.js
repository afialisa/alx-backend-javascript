const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber with Chai', async function () {
    const { expect } = await import('chai');

    describe('SUM', function () {
        it('should return 6 when inputs are 1.4 and 4.5', function () {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });

        it('should return 0 when inputs are -1.4 and 1.3', function () {
            expect(calculateNumber('SUM', -1.4, 1.3)).to.equal(0);
        });
    });

    describe('SUBTRACT', function () {
        it('should return -4 when inputs are 1.4 and 4.5', function () {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return 2 when inputs are 3.7 and 2.1', function () {
            expect(calculateNumber('SUBTRACT', 3.7, 2.1)).to.equal(2);
        });
    });

    describe('DIVIDE', function () {
        it('should return 0.2 when inputs are 1.4 and 4.5', function () {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when inputs are 1.4 and 0', function () {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });

    describe('Invalid Type', function () {
        it('should throw an error for invalid type', function () {
            expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw(Error, 'Invalid operation type');
        });
    });
});

