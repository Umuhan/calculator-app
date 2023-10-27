import operate from '../src/logic/operate';

describe('operate function', () => {
  it('should perform addition correctly', () => {
    expect(operate('5', '3', '+')).toBe('8');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('5', '3', 'x')).toBe('15');
  });

  it('should handle division by zero', () => {
    expect(operate('6', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should handle modulo with divisor zero', () => {
    expect(operate('7', '0', '%')).toBe(
      "Can't find modulo as can't divide by 0.",
    );
  });
});
