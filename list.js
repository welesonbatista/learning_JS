console.log(`Working with list`); //``
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;
const januaryList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

januaryList.push(`Catalão`); //add item in the list

console.log("Possible destinations:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(januaryList);
//januaryList = 2; //error

januaryList.splice(1,1); //removing a intem 
console.log(januaryList);
console.log(januaryList[1], januaryList[2]);