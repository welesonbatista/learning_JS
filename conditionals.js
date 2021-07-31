console.log(`Working with list`); //``

const januaryList = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const ageComparator=20;
console.log("Possible destinations:");
console.log(januaryList);

if(ageComparator >= 21){
    console.log("buyer of legal age");
    januaryList.splice(1,1);
}else {
    console.log("underage, impossible to sell");
}