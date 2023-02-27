import { Product } from "../../../components/interfaces";

const calculateProductOrder = (
  products: Array<Product>,
  destIndex: number,
  srcIndex: number
) => {
  if (products.length < 2) return -1;

  const productOrder = products[destIndex].ProductOrder;
  let dividend;

  if (destIndex === 0) {
    dividend = productOrder;
  } else if (destIndex === products.length - 1) {
    dividend = productOrder + (productOrder + 1);
  } else {
    if (destIndex > srcIndex) {
      dividend = productOrder + products[destIndex + 1].ProductOrder;
    } else {
      dividend = productOrder + products[destIndex - 1].ProductOrder;
    }
  }

  return dividend / 2;
};

const reorderProducts = (
  products: Array<Product>,
  product: Product,
  destIndex: number,
  srcIndex: number
) => {
  const newProducts = products.filter((_, idx) => idx !== srcIndex);
  newProducts.splice(destIndex, 0, product);

  return newProducts;
};

export { calculateProductOrder, reorderProducts };
