const { Soda } = require('../soda.js');
const { SodaMachine } = require('../sodaMachine.js');

describe('SodaMachine', () => {
  let pepsi; let mountainDew; let cokeZero; let secondPepsi; let
    sodaMachine;
  beforeEach(() => {
    pepsi = new Soda({ brand: 'Pepsi', price: 0.65 });
    mountainDew = new Soda({ brand: 'Mountain Dew', price: 0.75 });
    cokeZero = new Soda({ brand: 'Coke Zero', price: 1.0 });
    secondPepsi = new Soda({ brand: 'Pepsi', price: 0.65 });
    sodaMachine = new SodaMachine({
      sodas: [pepsi, mountainDew, cokeZero, secondPepsi],
      cash: 1.0,
    });
  });

  describe('function currentInventoryCount', () => {
    it('returns the number of sodas in the machine', () => {
      expect(sodaMachine.currentInventoryCount()).toEqual(4);
    });
  });

  describe('function findSoda', () => {
    describe('when the soda is in the machine', () => {
      it('returns the soda the user requested', () => {
        expect(sodaMachine.findSoda('Pepsi')).toEqual(pepsi);
      });
    });

    describe('when the soda is not available', () => {
      it('returns undefined', () => {
        expect(sodaMachine.findSoda('Surge')).toBeUndefined();
      });
    });
  });

  describe('function sell', () => {
    it('always returns undefined', () => {
      expect(sodaMachine.sell('Surge')).toBeUndefined();
    });

    describe('when the soda is not available to be sold', () => {
      it('works fine', () => {
        expect(() => sodaMachine.sell('Surge')).not.toThrow();
      });
    });

    describe('when the soda is available to be sold', () => {
      beforeEach(() => {
        sodaMachine.sell('Coke Zero');
      });

      it('adds the price of the soda sold to the cash', () => {
        expect(sodaMachine.cash).toEqual(2.0);
      });
      it('removes the sold soda from the machine', () => {
        expect(sodaMachine.sodas).not.toContain(cokeZero);
      });
    });
  });
});
