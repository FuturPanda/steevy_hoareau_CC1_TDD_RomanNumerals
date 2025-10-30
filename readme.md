# Roman Numeral Converter

A TypeScript function that converts decimal numbers to Roman numerals.

## Features

- Converts numbers from 1 to 3999 to Roman numerals
- Handles subtraction notation (IV, IX, XL, XC, CD, CM)
- Type-safe with TypeScript
- Input validation

## Installation

Simply copy the code into your TypeScript project.

## Usage

```typescript
import { toRoman } from './romanConverter';

// Basic usage
console.log(toRoman(1)); // 'I'
console.log(toRoman(4)); // 'IV'
console.log(toRoman(9)); // 'IX'
console.log(toRoman(58)); // 'LVIII'
console.log(toRoman(1994)); // 'MCMXCIV'
console.log(toRoman(3999)); // 'MMMCMXCIX'
```

## API

### `toRoman(number: number): string`

Converts a decimal number to a Roman numeral string.

**Parameters:**

- `number` (number): An integer between 1 and 3999 (inclusive)

**Returns:**

- (string): The Roman numeral representation

**Throws:**

- Error: If the number is less than 1 or greater than 3999

## Examples

| Decimal | Roman Numeral |
| ------- | ------------- |
| 1       | I             |
| 4       | IV            |
| 5       | V             |
| 9       | IX            |
| 10      | X             |
| 40      | XL            |
| 50      | L             |
| 90      | XC            |
| 100     | C             |
| 400     | CD            |
| 500     | D             |
| 900     | CM            |
| 1000    | M             |
| 2024    | MMXXIV        |
| 3999    | MMMCMXCIX     |

## How It Works

The converter uses a mapping of decimal values to Roman numerals, including the subtraction cases:

- **Subtraction notation**: Roman numerals use subtraction when a smaller value appears before a larger one:
  - IV = 4 (5 - 1)
  - IX = 9 (10 - 1)
  - XL = 40 (50 - 10)
  - XC = 90 (100 - 10)
  - CD = 400 (500 - 100)
  - CM = 900 (1000 - 100)

The algorithm processes values from largest to smallest, repeatedly subtracting each value and appending the corresponding Roman numeral until the number is fully converted.

## Roman Numeral Rules

- **I** = 1
- **V** = 5
- **X** = 10
- **L** = 50
- **C** = 100
- **D** = 500
- **M** = 1000

Numbers are formed by combining symbols and adding values. When a smaller symbol appears before a larger one, it's subtracted instead of added.

## Limitations

- Only supports numbers from 1 to 3999
- Does not convert Roman numerals back to decimal (only one-way conversion)
- Romans didn't have a symbol for zero

## Error Handling

```typescript
try {
  toRoman(0); // Throws: 'number outside parameters'
  toRoman(4000); // Throws: 'number outside parameters'
  toRoman(-5); // Throws: 'number outside parameters'
} catch (error) {
  console.error(error.message);
}
```

## Implementation Details

The function consists of three main parts:

1. **`romanMap`**: A mapping of decimal values to Roman numerals (sorted by value descending)
2. **`validateNumber`**: Validates that the input is within the valid range (1-3999)
3. **`convertNumber`**: Performs the actual conversion using a greedy algorithm

## Contributing

Feel free to submit issues or pull requests for improvements.

## License

MIT
