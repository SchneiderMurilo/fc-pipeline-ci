const soma = require('./index');

test('soma 2 + 3 = 5', () => {
    expect(soma(2, 3)).toBe(5);
});

test('soma números negativos', () => {
    expect(soma(-2, -3)).toBe(-5);
});
