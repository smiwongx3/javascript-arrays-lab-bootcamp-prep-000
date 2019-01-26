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
  kittens.slice(2)
}

function removeFirstKitten() {
  kittens.slice(1)
}

