function sum(a, b=0) {
    if(a === undefined){
        throw new Error('ei annettuja marametreja');
    }
    if(a === null || b === null){
        throw new Error('ei voi laskea: null');
    }
    const numA = Number(a);
    const numB = Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        throw new Error ('ei Voi laskea ei-numeromuotoisia merkkijonoja');

    }
    return numA + numB;
}

const sum2 = (a,b) => {
    return parseInt(a) + parseInt(b);
}
    
module.exports = {sum, sum2};