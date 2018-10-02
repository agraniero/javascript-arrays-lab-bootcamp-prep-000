var kittens =["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var neWkittens = [...kittens, name];
  return neWkittens;
}

function prependKitten(name) {
  var newNewKitties = [name, ...kittens];
  return newNewKitties;
}

function removeLastKitten() {
  
}