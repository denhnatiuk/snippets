function Factorial(){
  useBasicPattern(num){
    if(num == 1){
      return num
    } else {
      return num * useBasicPattern(num - 1)
    }
  }
  useBasicShorthand(num){
    num == 1 ? num : num * useBasicShorthand(--num)
  }
}

// reference

// Factorials are calculated by a combination of two algorithms. An idea is shared among them: to compute the odd part of the factorial; a final step takes account of the power of 2 term, by shifting.
//
// For small n, the odd factor of n! is computed with the simple observation that it is equal to the product of all positive odd numbers smaller than n times the odd factor of [n/2]!, where [x] is the integer part of x, and so on recursively. The procedure can be best illustrated with an example,
//
// 23! = (23.21.19.17.15.13.11.9.7.5.3)(11.9.7.5.3)(5.3)2^19
// Current code collects all the factors in a single list, with a loop and no recursion, and compute the product, with no special care for repeated chunks.
//
// When n is larger, computation pass trough prime sieving. An helper function is used, as suggested by Peter Luschny:
//
//                                  n
//                                -----
//                     n!          | |   L(p,n)
//      msf(n) = -------------- =  | |  p
//                [n/2]!^2.2^k     p=3
// Where p ranges on odd prime numbers. The exponent k is chosen to obtain an odd integer number: k is the number of 1 bits in the binary representation of [n/2]. The function L(p,n) can be defined as zero when p is composite, and, for any prime p, it is computed with:
//
//                ---
//                 \    n
//      L(p,n) =   /  [---] mod 2   <=  log (n) .
//                ---  p^i                p
//                i>0
// With this helper function, we are able to compute the odd part of n! using the recursion implied by n!=[n/2]!^2*msf(n)*2^k. The recursion stops using the small-n algorithm on some [n/2^i].
//
// Both the above algorithms use binary splitting to compute the product of many small factors. At first as many products as possible are accumulated in a single register, generating a list of factors that fit in a machine word. This list is then split into halves, and the product is computed recursively.
//
// Such splitting is more efficient than repeated Nx1 multiplies since it forms big multiplies, allowing Karatsuba and higher algorithms to be used. And even below the Karatsuba threshold a big block of work can be more efficient for the basecase algorithm.
