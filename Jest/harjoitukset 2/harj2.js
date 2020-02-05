// HARJ 2.1

const phoneNumberTest = (phoneNum) => {
    const regextest = /^[+]?[0-9\s]{3,20}$/;
    const tempNum = String(phoneNum.replace("(", "")).replace(")", "");

    if (tempNum.match(regextest)){
        return tempNum;
    } else {
        throw new Error ("numero ei ole oikeassa muodossa");
    }
}

// HARJ 2.2

    const makeContact = (fname, lname, id, pnumber="") => {
        if(fname === undefined || lname === undefined || id === undefined){
            throw new Error ('pakolliset parametrit puuttuvat');
        }

        let testedPhoneNum = "";
        if (pnumber.length != 0){
            try {
                testedPhoneNum = phoneNumberTest(pnumber);
            } catch(error) {
                testedPhoneNum = "";
            }
        }

        const contact = {
            firstname: fname,
            lastname: lname,
            phonenumber: testedPhoneNum,
            id: id
        }

        return contact;

    }

//HARJ 2.3

const printContact = (contact) => {
    const output = `<li>${contact.lastname}, ${contact.firstname} : ${contact.phonenumber} </li>`;
    return output
}

//HARJ 2.4

const printPhoneBook = (phonebook) => {
    const outputarray = phonebook.map(person => printContact(person));
    const output = outputarray.reduce((p1, p2) => p1 + p2, "");
    return `<ul> ${output} </ul>`
}


// HARJ 2.5

const findNumber = (phonebook, firstname, lastname) => {
    const outputarray = phonebook.filter(contact => (contact.firstname.toLowerCase() === firstname.toLowerCase()) && (contact.lastname.toLowerCase() === lastname.toLowerCase()));
    if(outputarray.length >= 1){
        return outputarray[0].phonenumber;
    } else {
        throw new Error("ei löydy yhteystietoja");
    }
}

// HARJ 2.6

const updateNumber = (phonebook, id, newnumber) => {
    const newPhoneBook = phonebook.map(contact =>{
        if(contact.id === id){
            return {...contact, phonenumber: phoneNumberTest(newnumber)}
        } else {
            return contact;
        }
    })
    return newPhoneBook;
}



module.exports = { phoneNumberTest, makeContact, printPhoneBook, printContact, findNumber,updateNumber};

