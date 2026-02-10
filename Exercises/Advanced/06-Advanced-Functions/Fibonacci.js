const fibRec = (n) => {
  if (n < 3) {
    return 1;
  }

  return fibRec(n - 1) + fibRec(n - 2);
};

const fibReg = () => {
  fibStatecurrentIndexNumber++;

  if (fibState.currentIndexNumber < 3) {
    return 1;
  }

  let a = 1,
    b = 1;

  for (let i = 0; i < fibState.currentIndexNumber - 2; i++) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
};

const fibState = {
  currentIndexNumber: 0,
  lastLastNumber: 0,
  lastNumber: 0,
};

let fibReset = () => {};

const fibSet = () => {};
