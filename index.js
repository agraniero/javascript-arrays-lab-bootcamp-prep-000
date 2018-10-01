var kittens =["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.shift("Ralph");
  return kittens;
}