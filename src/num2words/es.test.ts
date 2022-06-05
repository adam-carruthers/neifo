import num2wordsEs from "./es";

describe("num2wordsEs", () => {
  test("it can handle low numbers (1-29)", () => {
    expect(num2wordsEs(0)).toEqual("cero");
    expect(num2wordsEs(14)).toEqual("catorce");
    expect(num2wordsEs(17)).toEqual("diecisiete");
    expect(num2wordsEs(22)).toEqual("veintidós");
  });

  test("it can handle numbers below 100", () => {
    expect(num2wordsEs(30)).toEqual("treinta");
    expect(num2wordsEs(38)).toEqual("treinta y ocho");
    expect(num2wordsEs(91)).toEqual("noventa y uno");
    expect(num2wordsEs(53)).toEqual("cincuenta y tres");
    expect(num2wordsEs(99)).toEqual("noventa y nueve");
  });

  test("it can handle all the necessary numbers without crashing", () => {
    for (let n = 0; n < 1000; n++) {
      num2wordsEs(n);
    }
  });

  test("it can handle numbers below 1000", () => {
    expect(num2wordsEs(100)).toEqual("cien");
    expect(num2wordsEs(101)).toEqual("ciento uno");
    expect(num2wordsEs(300)).toEqual("trescientos");
    expect(num2wordsEs(345)).toEqual("trescientos cuarenta y cinco");
    expect(num2wordsEs(876)).toEqual("ochocientos setenta y seis");
    expect(num2wordsEs(999)).toEqual("novecientos noventa y nueve");
  });

  test("it can handle thousands", () => {
    expect(num2wordsEs(1000)).toEqual("mil");
    expect(num2wordsEs(1001)).toEqual("mil uno");
    expect(num2wordsEs(1002)).toEqual("mil dos");
    expect(num2wordsEs(2000)).toEqual("dos mil");
    expect(num2wordsEs(4567)).toEqual("cuatro mil quinientos sesenta y siete");
    expect(num2wordsEs(890123)).toEqual(
      "ochocientos noventa mil ciento veintitrés"
    );
    expect(num2wordsEs(999999)).toEqual(
      "novecientos noventa y nueve mil novecientos noventa y nueve"
    );
  });

  test("it can handle millions", () => {
    expect(num2wordsEs(1000000)).toEqual("un millón");
    expect(num2wordsEs(1000001)).toEqual("un millón uno");
    expect(num2wordsEs(2345678)).toEqual(
      "dos millones trescientos cuarenta y cinco mil seiscientos setenta y ocho"
    );
    expect(num2wordsEs(801234567890)).toEqual(
      "ochocientos uno mil doscientos treinta y cuatro millones quinientos sesenta y siete mil ochocientos noventa"
    );
    expect(num2wordsEs(999999999999)).toEqual(
      "novecientos noventa y nueve mil novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve"
    );
  });

  test("it can handle billions", () => {
    expect(num2wordsEs(1000000000000)).toEqual("un billón");
    expect(num2wordsEs(1000000000001)).toEqual("un billón uno");
    expect(num2wordsEs(7654321098765432)).toEqual(
      "siete mil seiscientos cincuenta y cuatro billones trescientos veintiuno mil noventa y ocho millones setecientos sesenta y cinco mil cuatrocientos treinta y dos"
    );
  });

  test("it can handle negative numbers", () => {
    expect(num2wordsEs(-5)).toEqual("menos cinco");
    expect(num2wordsEs(-32985)).toEqual(
      "menos treinta y dos mil novecientos ochenta y cinco"
    );
  });

  test.todo("it can handle decimal numbers gracefully");

  test.todo("it handles numbers that are too big gracefully");
});
