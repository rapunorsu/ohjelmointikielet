function sum(a,b=0){
    if(a === undefined || a === null){
        throw new Error('ei parametreja');
    }
    const numA = Number(a);
    const numB = Number(b);
    if (Number.isNaN(numA) || Number.isNaN(numB)){
        throw new Error('ei lukuja');
    }

    const result = numA + numB;

    return result;

    }

module.exports = sum;