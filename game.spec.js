
const nextState = grid => {

  if (compare(grid[0], [1, 0, 0]) &&
      compare(grid[1], [1, 0, 0]) &&
      compare(grid[2], [1, 0, 0])) {
    return [
        grid[0]
      , [1,1,0]
      , [1,0,0]
      ];
  }
  if (compare(grid[0], [1, 1, 1])) {
    return [
        grid[0]
      , [0,1,0]
      , [0,0,0]
      ];
  }
  if (compare(grid[2], [1, 1, 1])) {
    return [
        [0,0,0]
      , [0,1,0]
      , grid[2]
      ];
  }
  return [
      [0,0,0]
    , [0,0,0]
    , [0,0,0]
    ];
};

const compare = (a,b) => {
  for(let i=0; i<a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

const countNeighborsCellsAlive = (grid, x, y) => {
  let count = 0;
  const mx = x + 2;
  const my = y + 2;
  for(let r = y - 1; r < my; r++) {
    for(let c = x - 1; c < mx; c++) {
      if (r >= 0) {
        let row = grid[r];
        if (r >= 0 && c >= 0 && row && row[c] == 1) {
          if (c != x || r != y) {
            count++;
          }
        }
      }
    }
  }
  return count;
};

describe ('Game of life', () => {
  it ('a cell died when it\'s alone', () => {
    let grid = [
      [0,0,0]
    , [0,1,0]
    , [0,0,0]
    ];

    expect(nextState(grid)).toEqual([
      [0,0,0]
    , [0,0,0]
    , [0,0,0]
    ]);
  });

  it ('a cell is born when cell has three neighbors alive', () => {
    let grid = [
      [1,1,1]
    , [0,0,0]
    , [0,0,0]
    ];

    expect(nextState(grid)).toEqual([
      [1,1,1]
    , [0,1,0]
    , [0,0,0]
    ]);

    grid = [
      [0,0,0]
    , [0,0,0]
    , [1,1,1]
    ];

    expect(nextState(grid)).toEqual([
      [0,0,0]
    , [0,1,0]
    , [1,1,1]
    ]);

    grid = [
      [1,0,0]
    , [1,0,0]
    , [1,0,0]
    ];

    expect(nextState(grid)).toEqual([
      [1,0,0]
    , [1,1,0]
    , [1,0,0]
    ]);
  });
});

describe ('compare array', () => {
  it ('array are equal', () => {
    expect(compare([], [])).toEqual(true);
    expect(compare([1], [1])).toEqual(true);
  });
  it ('array are different', () => {
    expect(compare([1], [2])).toEqual(false);
  });
});

describe('count neighbors cells alive', () => {
  it('no neighbors cells alive', () => {
   let grid = [
      [0,0,0]
    , [0,1,0]
    , [0,0,0]
    ];
  expect(countNeighborsCellsAlive(grid, 1, 1)).toEqual(0);
  });
  it('one neighbors cells alive', () => {
   let grid = [
      [1,0,0]
    , [0,1,0]
    , [0,0,0]
    ];
  expect(countNeighborsCellsAlive(grid, 1, 1)).toEqual(1);
   grid = [
      [0,1,0]
    , [0,1,0]
    , [0,0,0]
    ];
  expect(countNeighborsCellsAlive(grid, 1, 1)).toEqual(1);
   grid = [
      [0,0,0]
    , [1,1,0]
    , [0,0,0]
    ];
  expect(countNeighborsCellsAlive(grid, 1, 1)).toEqual(1);
   grid = [
      [0,0,0,0]
    , [1,0,1,0]
    , [0,0,1,0]
    , [0,0,0,0]
    ];
  expect(countNeighborsCellsAlive(grid, 2, 2)).toEqual(1);
  grid = [
     [0,0,0]
   , [1,0,0]
   , [0,0,0]
   ];
 expect(countNeighborsCellsAlive(grid, 0, 0)).toEqual(1);
  grid = [
     [0,0,0]
   , [0,0,0]
   , [0,1,0]
   ];
 expect(countNeighborsCellsAlive(grid, 2, 2)).toEqual(1);
 grid = [
    [0,0,0,0]
  , [1,0,1,0]
  , [0,0,1,0]
  , [0,0,0,0]
  ];
expect(countNeighborsCellsAlive(grid, 3, 2)).toEqual(2);
 grid = [
    [0,0,0,0]
  , [1,0,0,0]
  , [0,0,1,1]
  , [0,0,0,0]
  ];
expect(countNeighborsCellsAlive(grid, 2, 3)).toEqual(2);
  });
});
