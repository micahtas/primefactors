/** Implementation of Project Euler Problem 3
 * Created by Micah on 10/8/2015.
 */

/* exported primeFactors */

/**
 * Function is given a number and finds it largest prime factor.
 * @param num number to find its prime factor.
 * @returns {*} returns the large prime factor.
 */
function primeFactors(num)
{
  var factors = [];
  var divide = 2;

  while(num > 1)
  {
    while(num % divide === 0)
    {
      factors.push(divide);
      num /= divide;
    }
    divide += 1;
  }
  //console.log(factors);
  //console.log(factors[factors.length - 1]);
  return factors[factors.length - 1];
}

