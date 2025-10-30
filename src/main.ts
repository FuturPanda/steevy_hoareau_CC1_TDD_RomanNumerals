export function toRoman(number: number): string {
  if (number < 1 || number > 3999) throw new Error('number outside parameters');
  const digitsArray = number.toString().split('');
  const arrayLength = digitsArray.length;
  const romanLetters = digitsArray.map((digit, index) => {
    const position = arrayLength - index;
    switch (digit) {
      case '1': {
        if (position == 1) return 'I';
        if (position == 2) return 'X';
        if (position == 3) return 'C';
        if (position == 4) return 'M';
        break;
      }
      case '2':
      case '3': {
        const multiplier = digit === '2' ? 2 : 3;
        if (position == 1) return 'I'.repeat(multiplier);
        if (position == 2) return 'X'.repeat(multiplier);
        if (position == 3) return 'C'.repeat(multiplier);
        if (position == 4) return 'M'.repeat(multiplier);
        break;
      }
      case '4': {
        if (position == 1) return 'IV';
        if (position == 2) return 'XL';
        if (position == 3) return 'CD';
        break;
      }
      case '5': {
        if (position == 1) return 'V';
        if (position == 2) return 'L';
        if (position == 3) return 'D';
        break;
      }
      case '6':
      case '7':
      case '8': {
        const extra = parseInt(digit) - 5;
        if (position == 1) return 'V' + 'I'.repeat(extra);
        if (position == 2) return 'L' + 'X'.repeat(extra);
        if (position == 3) return 'D' + 'C'.repeat(extra);
        break;
      }
      case '9': {
        if (position == 1) return 'IX';
        if (position == 2) return 'XC';
        if (position == 3) return 'CM';
        break;
      }
      default:
        return '';
    }
  });
  return romanLetters.join('');
}
