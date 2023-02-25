import React from "react";
import { DraggableProvided, Droppable, Draggable } from "react-beautiful-dnd";
import DraggableItem from "../DraggableItem/DraggableItem";
import {
  DraggableListProps,
  Order,
  DraggableProductListProps,
  Product
} from "../interfaces";

const renderOrderItem = (
  item: Order,
  provided: DraggableProvided,
  removeOrder: any
) => (
  <DraggableItem
    OrderID={item.OrderID}
    CustomerID={item.CustomerID}
    ProductID={item.ProductID}
    OrderStatus={item.OrderStatus}
    draggableProvided={provided}
    removeOrder={removeOrder}
  />
);

const renderProductItem = (
  item: Product,
  provided: DraggableProvided,
  removeOrder: any
) => (
  <DraggableItem
    ProductID={item.ProductID}
    ProductName={item.ProductName}
    ProductPhotoURL={item.ProductPhotoURL}
    ProductOrder={item.ProductOrder}
    draggableProvided={provided}
    removeOrder={removeOrder}
  />
);

const DraggableList = (
  props: DraggableListProps | DraggableProductListProps
) => (
  <Droppable droppableId={props.ID}>
    {provided => (
      <div
        ref={provided.innerRef}
        className="bg-neutral-500 p-4 w-full"
        data-testid={`droppable-container-${props.ID}`}
      >
        <h5
          className="font-bold text-white"
          data-testid={`droppable-title-${props.ID}`}
        >
          {props.listTitle}
        </h5>
        {props.items.length > 0 &&
          props.items.map((item, index) => (
            <Draggable
              key={"OrderID" in item ? item.OrderID : item.ProductID}
              draggableId={`${
                "OrderID" in item ? item.OrderID : item.ProductID
              }`}
              index={index}
            >
              {(provided: DraggableProvided) =>
                "OrderID" in item
                  ? renderOrderItem(item, provided, props.removeOrder)
                  : renderProductItem(item, provided, props.removeOrder)
              }
            </Draggable>
          ))}
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default DraggableList;
