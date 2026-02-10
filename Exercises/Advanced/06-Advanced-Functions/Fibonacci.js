const fibReg = () => {
  fibStatecurrentIndexNumber++;

  if (fibState.currentIndexNumber < 3) {
    return 1;
  }

  const result = fibState.lastLastNumber + fibState.lastNumber;

  fibState.lastLastNumber = fibState.lastNumber;
  fibState.lastNumber = result;

  return result;
};

const fibState = {
  currentIndexNumber: 0,
  lastLastNumber: 0,
  lastNumber: 0,
};

let fibReset = () => {
  fibState.currentIndexNumber = 0;
  fibState.lastLastNumber = 0;
  fibState.lastNumber = 0;
};
