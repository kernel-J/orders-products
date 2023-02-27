import React, { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableList from "../../components/DraggableList/DraggableList";
import PageWrapper from "../PageWrapper";
import { getProducts, updateProduct } from "../ApiHelper";
import { Product } from "../../components/interfaces";
import { calculateProductOrder, reorderProducts } from "./Utils";
import Spinner from "../../components/Spinner/Spinner";

const ProductsPage = () => {
  /*
    TODO:
      When the drag ends we want to keep the status persistant across logins. 
      Instead of modifying the data locally we want to do it serverside via a post
      request
  */

  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([] as Array<Product>);
  const [error, setError] = useState("");

  const handleDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) return;

    const srcIndex = source.index;
    const destIndex = destination.index;

    if (srcIndex === destIndex) return;

    const product = products[srcIndex];
    const newProductOrder = calculateProductOrder(
      products,
      destIndex,
      srcIndex
    );

    if (newProductOrder === -1) {
      setError("An error has occurred");
    } else {
      product.ProductOrder = newProductOrder;

      const newProducts = reorderProducts(
        products,
        product,
        destIndex,
        srcIndex
      );
      setProducts(newProducts);
      update(product);
    }
  };

  const update = async (product: Product) => {
    setIsLoading(true);
    const result = await updateProduct(product);
    setIsLoading(false);
    if (result === "error") {
      setError("An error has occurred");
    }
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    const results = await getProducts();
    setIsLoading(false);
    if (results.errorOccured) {
      setError("An error has occurred");
    } else {
      setProducts(results.productData);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  let content;
  if (isLoading) {
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    );
  } else {
    if (error) {
      content = (
        <div
          className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
          data-testid="error-container"
        >
          {error}
        </div>
      );
    } else if (products.length > 0) {
      content = (
        <div
          className="flex flex-row justify-center w-full pt-4"
          data-testid="products-container"
        >
          <DragDropContext onDragEnd={handleDragEnd}>
            <DraggableList
              ID="0"
              listTitle="Products"
              removeOrder={(item: Product) => {}}
              items={products}
            />
          </DragDropContext>
        </div>
      );
    } else {
      content = (
        <h1 className="text-3xl font-bold text-white">
          {"There are no products available"}
        </h1>
      );
    }
  }

  return <PageWrapper>{content}</PageWrapper>;
};

export default ProductsPage;
