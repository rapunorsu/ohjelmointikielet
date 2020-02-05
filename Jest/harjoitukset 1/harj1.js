//HARJOITUS 1.1

function age(a){
    const numA = Number(a)
    if (a >= 18) {
        return "täysi-ikäinen";
    } 
      
    if (a < 18) {
        return "lapsi";
    } 
    
    if(a === undefined){
        throw new Error('ei parametreja');
    }
    if (a === null){
        throw new Error ('ei voi laskea null');
    }

    if (Number.isNaN(numA)){
        throw new Error('ei voida kertoa ilman lukuja');
    } 

    return numA;

}

// HARJOITUS 1.2

function divide(a, b){
    const numA = Number(a);
    const numB = Number(b);
    if (a === undefined){
        throw new Error ('ei annettu parametrejä');
    }
    if(a === null || b === null){
        throw new Error('ei voi laskea null');
    }

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        throw new Error('ei voi laskea ei numero muotoisia merkkijonoja');
    }

    return numA/numB;
}

// HARJ 1.3

function bustrip(a){
    const numA = Number(a);

    if (numA <= 7){
        return ("Bussilippu ei maksa mitään")
    } else if (numA <= 16 && numA > 7){
        return ("Bussilippu maksaa 1 euroa")
    } else if (numA <= 25 && numA > 16) {
        return ("Bussilippu maksaa 1.50 euroa")
    } else if (numA <= 65 && numA > 25) {
        return ("Bussilippu maksaa 3 euroa")
    } else if (numA > 65){
        return ("Bussilippu maksaa 1.50 euroa") }

    if(a === undefined){
        throw new Error('ei parametreja');
    }
    if (a === null){
        throw new Error ('ei voi laskea null');
    }

    if (Number.isNaN(numA)){
        throw new Error('ei voida kertoa ilman lukuja');
    }

    return numA;

}

// HARJ 1.4

function triangle(a,b) {
    const numA = Number(a);
    const numB = Number(b);

    if (a === undefined || b === undefined){
        throw new Error ('ei parametrejä');
    }

    if (a === null || b === null){
        throw new Error ('ei voi laskea null')
    }

    if (Number.isNaN(numA) || Number.isNaN(numB)){
        throw new Error('ei voida laskea ilman lukuja');
    }

    return Math.floor(numA*numB)/2;
}

// HARJ 1.5

function price(a,b){
    const numA = Number(a);
    const numB = Number(b);

    if (numA >= 100 && numA <= 200) {
        const numB = 0.95;
    } else if (numA >= 201 && numA <= 500) {
        const numB =0.90;
    } else if (numA === 500) {
        const numB = 0.85;
    }

        if (a === undefined || b === undefined ){
            throw new Error ('ei parametrejä');
        }
    
        if (a === null || b === null){
            throw new Error ('ei voi laskea null')
        }
    
        if (Number.isNaN(numA)||Number.isNaN(numB)){
            throw new Error('ei voida laskea ilman lukuja');
        }

    return ((numA*numB)*1.24);
}



module.exports = {age, divide, bustrip, triangle, price};