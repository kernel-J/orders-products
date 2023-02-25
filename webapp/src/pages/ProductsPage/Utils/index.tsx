import { Product } from "../../../components/interfaces";

const calculateProductOrder = (products: Array<Product>, destIndex: number) => {
  if (products.length < 2) return null;

  const productOrder = products[destIndex].ProductOrder;
  let dividend;

  if (destIndex === 0) {
    dividend = productOrder;
  } else if (destIndex === products.length - 1) {
    dividend = productOrder + (productOrder + 1);
  } else {
    dividend = productOrder + products[destIndex + 1].ProductOrder;
  }

  return dividend / 2;
};

export { calculateProductOrder };
