const romanMap: Record<number, string> = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};

function validateNumber(number: number) {
  if (number < 1 || number > 3999) throw new Error('number outside parameters');
}

function convertNumber(number: number): string {
  let result = '';
  let remaining = number;

  Object.entries(romanMap).forEach(([num, letter]) => {
    const value = parseInt(num);
    while (remaining >= value) {
      result += letter;
      remaining -= value;
    }
  });
  return result;
}

export function toRoman(number: number): string {
  validateNumber(number);
  const result = convertNumber(number);
  return result;
}
