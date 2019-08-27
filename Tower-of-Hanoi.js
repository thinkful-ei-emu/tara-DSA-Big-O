// Tower of Hanoi Puzzle

function towerOfHanoi(n, source, destination, temp) {
  if (n === 1) {
    print(source, destination);
    return;
  }
  
  towerOfHanoi(n-1, source, temp, destination);
  print(source, destination);
  towerOfHanoi(n-1, temp, destination, source);

}

function print(S, D) {
  console.log(`${S} -> ${D}`);
}

towerOfHanoi(3, 'A', 'C', 'B');

