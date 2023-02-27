import { calculateProductOrder, reorderProducts } from "./";

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
    ProductID: 3,
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

describe("reorderProducts", () => {
  it("should return a list with the first and second elements swapped", () => {
    const newProductList = reorderProducts(products, products[0], 1, 0);

    expect(newProductList[0].ProductID).toEqual(2);
    expect(newProductList[1].ProductID).toEqual(1);
  });

  it("should return a list with first element in the last postion", () => {
    const newProductList = reorderProducts(products, products[0], 2, 0);

    expect(newProductList[0].ProductID).toEqual(2);
    expect(newProductList[1].ProductID).toEqual(3);
    expect(newProductList[2].ProductID).toEqual(1);
  });

  it("should return a list with last element in the first postion", () => {
    const newProductList = reorderProducts(products, products[2], 0, 2);

    expect(newProductList[0].ProductID).toEqual(3);
    expect(newProductList[1].ProductID).toEqual(1);
    expect(newProductList[2].ProductID).toEqual(2);
  });
});
