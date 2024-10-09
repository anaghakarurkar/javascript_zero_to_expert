'use strict';

const bills = [125, 555, 44];
const calcTip = billAmt =>
  billAmt >= 50 && billAmt <= 300 ? billAmt * 0.15 : billAmt * 0.2;

let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
  console.log(
    `The bill was ${bills[i]}, the tip was ${tips[i]}, and the total value ${totals[i]}`
  );
}
