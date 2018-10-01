var kittens =["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.shift(name);
  return kittens;
}