var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(kittenName) {
  kittens.push(kittenName)
}

function destructivelyPrependKitten(kittenName) {
  kittens.unshift(kittenName)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(kittenName) {
  return [...kittens, kittenName]
}

function prependKitten(kittenName) {
  return [kittenName, ...kittens]
}

function removeLastKitten() {
  return kittens.slice(3)
}

function removeFirstKitten(newKittens) {
  kittens.slice(-2)
}

