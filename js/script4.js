//
const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line

  let totalSalary = 0;
  const arrayOfSalary = Object.values(employees);

  for (const salary of arrayOfSalary) {
    totalSalary += salary;
  }

  return totalSalary;
};
