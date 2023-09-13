import { useState } from "react";

/*
    TODO
    -More rigersouly enforce integer only inputs
        -Disallow spaces, signs (-,+), decimals, E, etc.
    -Handle the case when there is no input:
        -Hide the "is not prime"
*/

export default function Primes() {
  const [number, setNumber] = useState("");
  const [isPrime, setIsPrime] = useState(false);
  const [prevPrime, setPrevPrime] = useState("None");
  const [nextPrime, setNextPrime] = useState("None");

  function enforceInteger(newString: string) {
    // TODO
    // Temporarily limiting number to less than 1,000,000,000
    // until I can figure out how to implement promises.
    if (isNaN(Number(newString)) || Number(newString) > 1000000000) {
      return false;
    } else {
      return true;
    }
  }

  function testPrime(num: number) {
    // 2 is the first prime number,
    // There are no others before it.
    if (num < 2) {
      return false;
    }

    // Half of all numbers (the evens) are divisible by 2
    // So we can cut out a lot of work by skipping them
    // If we did that, 2 would also be skipped, so we need to handle 2
    if (num === 2) {
      return true;
    }

    // If the number is even, it is not prime
    // In binary, all even numbers end in 0,
    // similar to how all numbers in base-10
    // that end in 0 are divisible by 10
    // So an even num & 1 === 0
    // And an odd num & 1 === 1
    if (!(num & 1)) {
      return false;
    }

    // Calculate the largest possible pair of divisors of num
    // we only need to check up to this value because any larger divisor
    // would result in a dividend that we already checked
    let limit = Math.sqrt(num);

    // Check all odd divisors from 3 to limit
    for (let divisor = 3; divisor <= limit; divisor += 2) {
      // If the divisor evenly divides num
      if (!(num % divisor)) {
        // Then num is not prime
        return false;
      }
    }

    // num has no integer divisors
    // num is prime
    return true;
  }

  function findNextPrime(num: number) {
    do {
      num++;
    } while (!testPrime(num));
    return num;
  }

  function findPrevPrime(num: number) {
    do {
      num--;
    } while (!testPrime(num) && num > 2);
    return num < 2 ? -1 : num;
  }

  // Function to update information about the user's input number
  function update(newString: string) {
    //Disregard any input that is not a number
    if (enforceInteger(newString)) {
      //The input was a valid number
      //Update the number
      setNumber(newString);
      //Check if the number is prime
      setIsPrime(testPrime(Number(newString)));

      setPrevPrime(String(findPrevPrime(Number(newString))));
      setNextPrime(String(findNextPrime(Number(newString))));
    }
  }

  return (
    <div className="prime content">
      <h2>Primes</h2>
      <div className="prime hud">
        <div className="prime box left">
          <div
            className="prime selector unselectable"
            onClick={() => {
              update(prevPrime);
            }}
          >
            <div>{Number(prevPrime) === -1 ? "None" : prevPrime}</div>
            <div className="prime caption">Previous</div>
          </div>
        </div>
        <div className="prime box mid">
          <div>
            <form className="prime form">
              <input
                autoFocus
                className="prime input"
                type="text"
                placeholder="Type a number"
                value={number}
                onChange={(event) => update(event.target.value)}
              />
            </form>
          </div>
          <div className="prime caption">is {!isPrime && "not"} prime.</div>
        </div>
        <div className="prime box right">
          <div
            className="prime selector unselectable"
            onClick={() => {
              update(nextPrime);
            }}
          >
            <div>{Number(nextPrime) === -1 ? "None" : nextPrime}</div>
            <div className="prime caption">Next</div>
          </div>
        </div>
      </div>
    </div>
  );
}
