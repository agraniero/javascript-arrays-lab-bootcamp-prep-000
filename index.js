var kittens =["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.unshift(name);
  return kittens;
}