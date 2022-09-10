export const generateRandomInteger = (min: number, max: number) =>
  Math.floor(Math.random() * (max + 1 - min) + min);

export interface Operator {
  operate: (n1: number, n2: number) => number;
  toUserLocaleString: () => string;
  symbol: string;
}

export const addOperator: Operator = {
  operate: (n1, n2) => n1 + n2,
  toUserLocaleString: () => "más",
  symbol: "+",
};

export const minusOperator: Operator = {
  operate: (n1, n2) => n1 - n2,
  toUserLocaleString: () => "menos",
  symbol: "-",
};

export const multiplyOperator: Operator = {
  operate: (n1, n2) => n1 * n2,
  toUserLocaleString: () => "por",
  symbol: "x",
};

export const allOperators: Operator[] = [
  addOperator,
  minusOperator,
  multiplyOperator,
];

export const chooseRandomOperator = () =>
  allOperators[generateRandomInteger(0, allOperators.length - 1)];
