const {contact1, contact2, contact3, testPhoneBook, testPhoneBook2} = require('./testdata');

const {phoneNumberTest, findNumber, updateNumber, makeContact, printContact} = require('./harj2');

test('tarkistetaan: 0505553333, tulos: (ok, palautetaan sama)', () => {
    expect(phoneNumberTest("0505553333")).toBe("0505553333");
});

// HARJ 2.5

test('etsii contact1:n tiedot, numero löytyy', () => {
    expect(findNumber(testPhoneBook, contact1.firstname, contact1.lastname)).toBe(contact1.phonenumber)
});

test('etsii contact1:n tiedot, numero löytyy CS', () => {
    expect(findNumber(testPhoneBook, "heikki", "Heikkilä")).toBe(contact1.phonenumber)
});

test('etsii contact1:n tiedot, numero löytyy CS2', () => {
    expect(findNumber(testPhoneBook, "heikki", "HeikkILÄ")).toBe(contact1.phonenumber)
});

test('etsii contact3:n tiedot, ei löydy, heittää virheen', () => {
    expect(() => {
        findNumber(testPhoneBook2, contact3.firstname, contact3.lastname)
    }).toThrow('ei löydy yhteystietoja');
});

// HARJ 2.6

test('päivitetään id=0 puhnro, uusinumero 0101231231', () => {
    expect(updateNumber(testPhoneBook, 0, "0101231231")).toEqual(
        [ {
            firstname: "Heikki",
            lastname: "Heikkilä",
            phonenumber:"0101231231",
            id:0
        },
        contact2,
        contact3
        ]
    );
});

test('annetaan viallinen puhnro, o1o1231231, heittää virheen', () => {
    expect(() => {
        updateNumber(testPhoneBook, 0, "o1o1231231")
    }).toThrow('numero ei ole oikeassa muodossa');
});

test('tekee yhteystiedon', () => {
    expect(() => {
        makeContact("Juuso")
    }).toThrow('pakolliset parametrit puuttuvat');
});

test('tekee yhteystiedon, puuttuu', () => {
    expect(() => {
        makeContact("Juuso","Kalle")
    }).toThrow('pakolliset parametrit puuttuvat');
});

test('tyhjä puhelinnumero', () => {
    expect(makeContact("Heikki", "Heikkilä", 2, "")).toEqual(
        {
            firstname: "Heikki", 
            lastname: "Heikkilä", 
            phonenumber:"", 
            id: 2
    })
});

test('ok puhnro', () => {
    expect(makeContact("Heikki", "Heikkilä", 3, "0503680414")).toEqual(
        {
            firstname: "Heikki", 
            lastname: "Heikkilä", 
            phonenumber:"0503680414", 
            id: 3
    })
});

test('tulostaa contactin', () => {
    expect(printContact({  lastname: "Ketoosi", firstname: "Kalle",
    phonenumber:"0503680414", id: 8 })).toEqual(

        "<li>Ketoosi, Kalle : 0503680414 </li>"
    )
});
