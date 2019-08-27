// Tower of Hanoi Puzzle

// numOfDisks = 3
function towerOfHanoi(numOfDisks) {
  const discOne = '---';
  const discTwo = '------';
  const discThree = '---------';
  const rods = [[discOne, '', ''],[discTwo, '', ''],[discThree, '', '']];

  // stopping case - index of rods are the same and are not index 0
  if ((rods[0][1] && rods[1][1] && rods[2][1]) ||
  (rods[0][2] && rods[1][2] && rods[2][2])){
    return;
  }

  
  // unstack until rods are full
  // should always prefer the empty space over other discs, 
  // should only stack on disc one size bigger
  // stack - search for smallest, stack on next smallest disc

  console.log(rods);
}

towerOfHanoi(3);




// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?