import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableList from "./DraggableList";
import { Order, Product } from "../interfaces";

export default {
  title: "Draggable List",
  component: DraggableList
} as ComponentMeta<typeof DraggableList>;

const Template: ComponentStory<typeof DraggableList> = args => (
  <DragDropContext onDragEnd={() => {}}>
    <DraggableList {...args} />
  </DragDropContext>
);

const getArgs = (OrderStatus: string) => ({
  ID: "12345",
  listTitle: "Test List",
  removeOrder: (item: Order) => {},
  items: [
    { OrderID: 1234, CustomerID: 1234, ProductID: 123456, OrderStatus },
    { OrderID: 1235, CustomerID: 1235, ProductID: 123456, OrderStatus },
    { OrderID: 1236, CustomerID: 1236, ProductID: 123456, OrderStatus }
  ]
});

const getArgsProduct = () => ({
  ID: "12345",
  listTitle: "Prooduct Test List",
  removeOrder: (item: Product) => {},
  items: [
    {
      ProductID: 1234,
      ProductName: "Hat",
      ProductPhotoURL: "",
      ProductOrder: 1
    },
    {
      ProductID: 1235,
      ProductName: "Shirt",
      ProductPhotoURL: "",
      ProductOrder: 2
    },
    {
      ProductID: 1236,
      ProductName: "Pants",
      ProductPhotoURL: "",
      ProductOrder: 3
    }
  ]
});

export const NotInQA = Template.bind({});
NotInQA.args = getArgs("InProgress");

export const InQA = Template.bind({});
InQA.args = getArgs("QA");

export const WithProduct = Template.bind({});
WithProduct.args = getArgsProduct();
