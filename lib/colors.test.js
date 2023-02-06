const colors = require('./colors');

describe('color', () => {
    test('black contrast', () => {
        expect(colors.betterContrast(colors.Colors.black)).toBe(colors.Colors.white);
    });
    test('black contrast black & white', () => {
        expect(colors.betterContrast(colors.Colors.black, colors.Colors.black, colors.Colors.white)).toBe(colors.Colors.white);
    });
    test('white contrast', () => {
        expect(colors.betterContrast(colors.Colors.white)).toBe(colors.Colors.black);
    });
    test('white contrast black & white', () => {
        expect(colors.betterContrast(colors.Colors.white, colors.Colors.black, colors.Colors.white)).toBe(colors.Colors.black);
    });
});