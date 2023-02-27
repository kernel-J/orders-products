import axios from "axios";
import { Order, OrderData, Product } from "../components/interfaces";

const INPIPELINE_URL = "/api/orders/inpipeline";
const PRODUCTS_URL = "/api/products";

const getProducts = async () => {
  let productData: Array<Product> = [];
  let errorOccured = false;

  try {
    const response = await axios.get(PRODUCTS_URL, {
      headers: {
        "Content-Type": "image/jpeg"
      }
    });
    if (response?.status === 200) {
      const { data } = response;

      productData = [...data];
    }
  } catch (err) {
    console.error(err);
    errorOccured = true;
  }
  return { productData, errorOccured };
};

const updateProduct = async (product: Product) => {
  const { ProductID, ProductOrder } = product;

  try {
    const response = await axios.put(PRODUCTS_URL + "/" + ProductID, {
      product: {
        id: ProductID,
        product_order: ProductOrder
      }
    });
    if (response?.status === 200) {
      return "success";
    }
  } catch (err) {
    console.error(err);
  }
  return "error";
};

const getInPipelineData = async () => {
  const orderData: OrderData = {
    Queued: [],
    InProgress: [],
    QA: []
  };
  let errorOccured = false;
  try {
    const response = await axios.get(INPIPELINE_URL);
    if (response?.status === 200) {
      const { data } = response.data;
      data.forEach((order: Order) => {
        orderData[order.OrderStatus as keyof OrderData].push(order);
      });
    } else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
    errorOccured = true;
  }
  return { orderData, errorOccured };
};

const UPDATE_STATUS_URL = "/api/orders/update_status";

const updateOrderStatus = async (order: Order, newOrderStatus: string) => {
  const updatedOrder = { ...order, OrderStatus: newOrderStatus };
  let orderStatusUpdated = false;
  try {
    const response = await axios.post(UPDATE_STATUS_URL, updatedOrder);
    if (response?.status === 200) orderStatusUpdated = true;
    else {
      const { message } = response.data;
      throw message;
    }
  } catch (err) {
    console.error(err);
  }
  return orderStatusUpdated;
};

export {
  getInPipelineData,
  INPIPELINE_URL,
  updateOrderStatus,
  UPDATE_STATUS_URL,
  getProducts,
  updateProduct
};
