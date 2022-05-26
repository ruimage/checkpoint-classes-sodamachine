class SodaMachine {
  constructor(args = {}) {
    this.sodas = args.sodas;
    this.cash = args.cash;
  }

  currentInventoryCount() {
    return this.sodas.length;
  }

  findSoda(sodaBrand) {
    return this.sodas.filter((el) => el.brand === sodaBrand).pop();
  }

  sell(sodaBrand) {
    const sodaForSell = this.findSoda(sodaBrand);
    if (sodaForSell !== undefined) {
      this.sodas = this.sodas.filter((el) => el !== sodaForSell);
      this.cash += sodaForSell.price;
    }
  }
}

module.exports = { SodaMachine };
