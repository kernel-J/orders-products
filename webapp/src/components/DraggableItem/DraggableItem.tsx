import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXmark,
  faSquareCheck
} from "@fortawesome/free-solid-svg-icons";
import { DraggableItemProps, DraggableProductItemProps } from "../interfaces";

const DraggableOrderItem = (props: DraggableItemProps) => (
  <div
    className="bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full"
    data-testid={`draggable-container-${props.OrderID}`}
  >
    <span data-testid={`draggable-customerID-${props.OrderID}`}>
      {props.CustomerID}
    </span>
    <span data-testid={`draggable-productID-${props.OrderID}`}>
      {props.ProductID}
    </span>
    {(() => {
      const {
        OrderID,
        CustomerID,
        ProductID,
        OrderStatus,
        removeOrder
      } = props;
      return (
        <button
          onClick={() =>
            removeOrder({ OrderID, CustomerID, ProductID, OrderStatus })
          }
        >
          <FontAwesomeIcon
            icon={OrderStatus === "QA" ? faSquareCheck : faSquareXmark}
            className={`${
              OrderStatus === "QA" ? "text-green-600" : "text-red-600"
            } fa-lg`}
            data-testid={`draggable-btn-${props.OrderID}`}
          />
        </button>
      );
    })()}
  </div>
);

const DraggableProductItem = (props: DraggableProductItemProps) => (
  <div
    className="bg-neutral-300 flex items-center justify-between mt-1 p-3 rounded w-full"
    data-testid={`draggable-container-${props.ProductID}`}
  >
    <span data-testid={`draggable-productID-${props.ProductID}`}>
      {props.ProductID}
    </span>
    <span data-testid={`draggable-productName-${props.ProductID}`}>
      {props.ProductName}
    </span>
    <img
      data-testid={`draggable-productPhotoURL-${props.ProductID}`}
      className="object-contain h-10 w-10"
      src={props.ProductPhotoURL}
      alt="img"
    />
  </div>
);

const DraggableItem = (
  props: DraggableItemProps | DraggableProductItemProps
) => (
  <div
    ref={props.draggableProvided.innerRef}
    {...props.draggableProvided.draggableProps}
    {...props.draggableProvided.dragHandleProps}
  >
    {"OrderID" in props ? (
      <DraggableOrderItem {...props} />
    ) : (
      <DraggableProductItem {...props} />
    )}
  </div>
);

export default DraggableItem;
