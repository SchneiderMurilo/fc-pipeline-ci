const { soma, subtrai } = require('./index');

test('soma 2 + 3 = 5', () => {
    expect(soma(2, 3)).toBe(5);
});

test('soma números negativos', () => {
    expect(soma(-2, -3)).toBe(-5);
});

test('subtrai 5 - 3 = 2', () => {
    expect(subtrai(5, 3)).toBe(2);
});

test('subtrai números negativos', () => {
    expect(subtrai(-5, -3)).toBe(-2);
});
