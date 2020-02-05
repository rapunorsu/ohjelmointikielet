const {age, divide, bustrip, triangle, price} = require('./harj1');

test('testataan taysi-ikaisyys', () => {
    expect(age(19)).toBe("täysi-ikäinen");
});

test('testataan taysi-ikaisyys', () => {
    expect(age(15)).toBe("lapsi");
});

test('testataan taysi-ikaisyys', () => {
    expect(() => {
        age("koira")}).toThrow('ei voida kertoa ilman lukuja');
});
test('testataan taysi-ikaisyys', () => {
    expect(() => {
        age()}).toThrow('ei parametreja');
});

// harj 1.2

test('jakolasku', () => {
    expect(divide(5,1)).toBe(5);
});

test('jakolasku 1', () => {
    expect(divide(5,5)).toBe(1);
});

test('jakolasku 2', () => {
    expect(() => {
        divide("viisi", "yksi")}).toThrow('ei voi laskea ei numero muotoisia merkkijonoja');
});

test('jakolasku 3', () => {
    expect(() => {
        divide( )}).toThrow('ei annettu parametrejä');
});


// harj 1.3

test('testataan bussin hinta', () => {
    expect(bustrip(15)).toBe("Bussilippu maksaa 1 euroa");
});

test('testataan bussin hinta 1', () => {
    expect(bustrip(6)).toBe("Bussilippu ei maksa mitään");
});

test('testataan bussin hinta 2', () => {
    expect(bustrip(20)).toBe("Bussilippu maksaa 1.50 euroa");
});

test('testataan bussin hinta 3', () => {
    expect(bustrip(50)).toBe("Bussilippu maksaa 3 euroa");
});

test('testataan bussin hinta 3', () => {
    expect(bustrip(70)).toBe("Bussilippu maksaa 1.50 euroa");
});

test('testataan bussin hinta', () => {
    expect(() => {
        bustrip("minna")}).toThrow('ei voida kertoa ilman lukuja');
});

// harj 1.4

test('jakolasku', () => {
    expect(triangle(2,2)).toBe(2);
});

test('jakolasku 1', () => {
    expect(() => {
        bustrip("minna")}).toThrow('ei voida kertoa ilman lukuja');
});

test('jakolasku 2', () => {
    expect(() => {
        bustrip()}).toThrow('ei parametreja');
});


// harj 1.5

test('jakolasku', () => {
    expect(price(100, 0.95)).toBe(117.8);
});

test('testataan bussin hinta', () => {
    expect(() => {
        price("minna", "koira")}).toThrow('ei voida laskea ilman lukuja');
});

test('testataan bussin hinta', () => {
    expect(() => {
        price(1)}).toThrow('ei parametrejä');
});