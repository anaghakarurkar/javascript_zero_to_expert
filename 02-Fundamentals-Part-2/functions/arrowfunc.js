'using strict';

const calculateAge = function (birthYear) {
  return 2024 - birthYear;
};
const retirementAge = (birthYear, name) => {
  const age = calculateAge(birthYear);
  return `Hello ${name}, your age is ${age}, and you have ${
    65 - age
  } years left for retirement.`;
};

const retirementDetails = retirementAge(1978, 'Anagha');
console.log(retirementDetails);
