var kittens =["Milo", "Otis", "Garfield"];
var newCat = "Space Pizza DJ Cat"

function destructivelyAppendKitten(newCat) {
  kittens.shift(newCat);
  return kittens;
}