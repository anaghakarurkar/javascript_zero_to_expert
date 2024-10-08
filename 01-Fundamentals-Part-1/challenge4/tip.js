const billAmount = 275;

const tip = (billAmount  >=50 && billAmount <= 300) ? billAmount * 0.15 : billAmount * 0.20;

console.log(`The bill was ${billAmount}, the tip was ${tip}, and the total value ${billAmount + tip}`);