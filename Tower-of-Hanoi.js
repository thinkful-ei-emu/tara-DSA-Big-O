// Tower of Hanoi Puzzle

// numOfDisks = 3
function towerOfHanoi(n, source, destination, temp) {
  if (n === 1) {
    print(source, destination)
    return;
  }
  print(source, destination)

  // if(n % 2 !== 0) {
  //   towerOfHanoi(n-1, source, temp, destination);
  //   towerOfHanoi(n-1, temp, source, destination);
  // }

  // if(n % 2 === 0){
  //   towerOfHanoi(n-1, temp, destination, source);
  //   towerOfHanoi(n-1, temp, source, destination);
  // }

  //9, 12, 9, 17, 6, 18, 6, 13, 9 17, 6, 18, 6

  //(S-D), (S-T), (T-D), (T-S), (T-S), (S-T), (T-D)

  towerOfHanoi(n-1, source, temp, destination);
  towerOfHanoi(n-1, destination, temp, source);


  // print(A, B);
  // print(A, C);
  // print(B, C);

}

function print(S, D) {
  console.log(`${S} -> ${D}`)
}

towerOfHanoi(3, 'A', 'C', 'B');




// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?

// const discOne = '---';
// const discTwo = '------';
// const discThree = '---------';
// const rods = [[discOne, '', ''],[discTwo, '', ''],[discThree, '', '']];

// // stopping case - index of rods are the same and are not index 0
// if ((rods[0][1] && rods[1][1] && rods[2][1]) ||
// (rods[0][2] && rods[1][2] && rods[2][2])){
//   return;
// }


// // unstack until rods are full
// // should always prefer the empty space over other discs, 
// // should only stack on disc one size bigger
// // stack - search for smallest, stack on next smallest disc

// console.log(rods);