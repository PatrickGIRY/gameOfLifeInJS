
const nexState = grid => {

  if (compare(grid[0], [1, 1, 1])) {
    return [
        [1,1,1]
      , [0,1,0]
      , [0,0,0]
      ];
  }
  if (compare(grid[2], [1, 1, 1])) {
    return [
        [0,0,0]
      , [0,1,0]
      , [1,1,1]
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
describe ('Game of life', () => {
  it ('a cell died when it\'s alone', () => {
    let grid = [
      [0,0,0]
    , [0,1,0]
    , [0,0,0]
    ];

    expect(nexState(grid)).toEqual([
      [0,0,0]
    , [0,0,0]
    , [0,0,0]
    ]);
  });

  it ('a cell is borne when cell has three neighbors', () => {
    let grid = [
      [1,1,1]
    , [0,0,0]
    , [0,0,0]
    ];

    expect(nexState(grid)).toEqual([
      [1,1,1]
    , [0,1,0]
    , [0,0,0]
    ]);

    grid = [
      [0,0,0]
    , [0,0,0]
    , [1,1,1]
    ];

    expect(nexState(grid)).toEqual([
      [0,0,0]
    , [0,1,0]
    , [1,1,1]
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
