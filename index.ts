function groupAnagrams(strs: string[]): string[][] {
  const alphabetMap = getPrimeNumbersForLetters();

  const resObj: Record<string, string[]> = {};

  strs.forEach((str) => {
    const mult = str
      .split('')
      .reduce((acc, curr) => acc * alphabetMap[curr], 1);
    if (Array.isArray(resObj[mult])) {
      resObj[mult].push(str);
    } else {
      resObj[mult] = [str];
    }
  });
  return Object.values(resObj);
}

function getPrimeNumbersForLetters() {
  let primeNumber = 2;
  const obj: Record<string, number> = {};
  for (let i = 0; i < 26; i++) {
    while (!isPrime(primeNumber)) {
      primeNumber++;
    }
    obj[String.fromCharCode(i + 97)] = primeNumber;
    primeNumber++;
  }
  return obj;
}

function isPrime(n: number) {
  if (n < 2) return false;
  if (n === 2) return true;
  for (let i = 2; i < Math.sqrt(n) + 1; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
