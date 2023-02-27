import React from "react";
import { render, screen } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableList from "./DraggableList";
import { Order, Product } from "../interfaces";

describe("DraggableList", () => {
  it("rendersDraggableList", async () => {
    const ID = "1234";
    const props = {
      ID,
      listTitle: "Test List",
      removeOrder: (item: Order) => {},
      items: [
        {
          OrderID: 1234,
          CustomerID: 1234,
          ProductID: 123456,
          OrderStatus: "InProgress"
        },
        {
          OrderID: 1235,
          CustomerID: 1235,
          ProductID: 123456,
          OrderStatus: "InProgress"
        },
        {
          OrderID: 1236,
          CustomerID: 1236,
          ProductID: 123456,
          OrderStatus: "InProgress"
        }
      ]
    };
    render(
      <DragDropContext onDragEnd={() => {}}>
        <DraggableList {...props} />
      </DragDropContext>
    );
    expect(screen.getByTestId(`droppable-container-${ID}`)).toBeInTheDocument();
    expect(screen.getByTestId(`droppable-title-${ID}`)).toBeInTheDocument();
    expect(screen.getByText(`1234`)).toBeInTheDocument();
    expect(screen.getByText(`1235`)).toBeInTheDocument();
    expect(screen.getByText(`1236`)).toBeInTheDocument();
  });

  it("rendersDraggableList with Products", async () => {
    const ID = "1234";
    const props = {
      ID,
      listTitle: "Test List",
      removeOrder: (item: Product) => {},
      items: [
        {
          ProductID: 4321,
          ProductName: "hat",
          ProductPhotoURL: "some_url",
          ProductOrder: 1
        },
        {
          ProductID: 4322,
          ProductName: "hat",
          ProductPhotoURL: "some_url",
          ProductOrder: 2
        },
        {
          ProductID: 4323,
          ProductName: "shoes",
          ProductPhotoURL: "some_url",
          ProductOrder: 3
        }
      ]
    };
    render(
      <DragDropContext onDragEnd={() => {}}>
        <DraggableList {...props} />
      </DragDropContext>
    );
    expect(screen.getByTestId(`droppable-container-${ID}`)).toBeInTheDocument();
    expect(screen.getByTestId(`droppable-title-${ID}`)).toBeInTheDocument();
    expect(screen.getByText(`4321`)).toBeInTheDocument();
    expect(screen.getByText(`4322`)).toBeInTheDocument();
    expect(screen.getByText(`4323`)).toBeInTheDocument();
  });
});
