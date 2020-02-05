const {sum} = require('./sum');

// describe.skip('sum-testit', () => {


test('suorittaa yhteenlaskun 1 + 2, tulos 3', () => {
    expect(sum(1, 2)).toBe(3);
 });

 test('suoritetaan yhteenlasku 0+0, tulos 0', () => {
     expect(sum(0,0)).toBe(0);
 });

 test('ei annattuja parametreja', () => {
    expect(() => {
        sum()
    }).toThrow('ei annettuja marametreja');
});

test('ei numeroita', () => {
    expect(() => {
        sum("JEsse", "Koira")
    }).toThrow('ei Voi laskea ei-numeromuotoisia merkkijonoja');
});

test('ei numeroita', () => {
    expect(() => {
        sum(null, null)
    }).toThrow('ei voi laskea: null');
});

// });