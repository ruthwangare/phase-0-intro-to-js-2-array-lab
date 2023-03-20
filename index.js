const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
  }
  function destructivelyPrependCat(name) {
    cats.unshift("Bob");
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  const cat = ["Milo", "Otis", "Garfield", "Ralph"];

  function removeFirstCat() {
    return cats.slice(1);
  }

  console.log(removeFirstCat()); // prints ["Milo", "Otis", "Garfield"]
  console.log(cats); // prints ["Milo", "Otis", "Garfield", "Ralph"]

  const ats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}





