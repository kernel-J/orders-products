import { calculateProductOrder } from "./";

const products = [
  {
    ProductID: 1,
    ProductName: "hat",
    ProductPhotoURL: "t",
    ProductOrder: 1
  },
  {
    ProductID: 2,
    ProductName: "shirt",
    ProductPhotoURL: "t",
    ProductOrder: 2
  },
  {
    ProductID: 2,
    ProductName: "pants",
    ProductPhotoURL: "t",
    ProductOrder: 3
  }
];

describe("calculateProductOrder", () => {
  it("should return -1", () => {
    expect(calculateProductOrder([], 0, 0)).toEqual(-1);
  });

  it("should return 0.5", () => {
    expect(calculateProductOrder(products, 0, 1)).toEqual(0.5);
  });

  it("should return 3.5", () => {
    expect(calculateProductOrder(products, 2, 1)).toEqual(3.5);
  });

  it("should return 2.5", () => {
    expect(calculateProductOrder(products, 1, 0)).toEqual(2.5);
  });

  describe("when srcIndex > destIndex", () => {
    it("should return 1.5", () => {
      expect(calculateProductOrder(products, 1, 2)).toEqual(1.5);
    });
  });
});
