const stepRight = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].icon === 'X') {
        if (arr[i][j + 1].icon !== '#') {
          const temp = arr[i][j + 1];
          arr[i][j + 1] = arr[i][j];
          arr[i][j] = temp;
          return arr;
        }
      }
    }
  }

  //return arr;
};

const stepDown = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].icon === 'X') {
        if (arr[i + 1][j].icon !== '#') {
          const temp = arr[i + 1][j];
          arr[i + 1][j] = arr[i][j];
          arr[i][j] = temp;
          return arr;
        }
      }
    }
  }

  //return arr;
};

const stepLeft = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].icon === 'X') {
        if (arr[i][j - 1].icon !== '#') {
          const temp = arr[i][j - 1];
          arr[i][j - 1] = arr[i][j];
          arr[i][j] = temp;
          return arr;
        }
      }
    }
  }

  //return arr;
};

const stepUp = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].icon === 'X') {
        if (arr[i - 1][j].icon !== '#') {
          const temp = arr[i - 1][j];
          arr[i - 1][j] = arr[i][j];
          arr[i][j] = temp;
          return arr;
        }
      }
    }
  }

  //return arr;
};

module.exports = {
  stepDown,
  stepUp,
  stepLeft,
  stepRight,
};
