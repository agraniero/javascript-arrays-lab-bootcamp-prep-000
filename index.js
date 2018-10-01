var kittens =["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.unshift("Ralph");
  return kittens;
}