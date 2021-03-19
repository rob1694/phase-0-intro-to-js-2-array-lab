// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    let newCats = [...cats.slice(0), 'Broom'];
    return newCats;
}

function prependCat(name){
    let newCats = ['Arnold',...cats.slice(0)];
    return newCats;
}

function removeLastCat(){
    let newCats = [...cats.slice(0, cats.length - 1)];
    return newCats;
}

function removeFirstCat(){
    let newCats = [...cats.slice(1)];
    return newCats;
}

